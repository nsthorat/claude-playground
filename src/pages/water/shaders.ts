// GPGPU Water Simulation Shaders
// Based on Three.js GPGPU water example with iOS compatibility

export const heightmapFragmentShader = `
  uniform vec2 mousePos;
  uniform float mouseSize;
  uniform float viscosity;
  uniform vec2 gravity;
  uniform float gravityStrength;

  void main() {
    vec2 cellSize = 1.0 / resolution.xy;
    vec2 uv = gl_FragCoord.xy * cellSize;

    // Get heights from neighboring cells
    float north = texture2D(heightmap, uv + vec2(0.0, cellSize.y)).x;
    float south = texture2D(heightmap, uv + vec2(0.0, -cellSize.y)).x;
    float east = texture2D(heightmap, uv + vec2(cellSize.x, 0.0)).x;
    float west = texture2D(heightmap, uv + vec2(-cellSize.x, 0.0)).x;

    // Get current height and velocity (stored in x and y)
    vec4 current = texture2D(heightmap, uv);
    float height = current.x;
    float velocity = current.y;

    // Wave equation: acceleration proportional to difference from neighbors
    float avgNeighborHeight = (north + south + east + west) * 0.25;
    float acceleration = avgNeighborHeight - height;

    // Apply gravity influence (tilt effect)
    vec2 gravityDir = normalize(gravity + vec2(0.001));
    float gravityInfluence = dot(uv - 0.5, gravityDir) * gravityStrength * length(gravity);
    acceleration += gravityInfluence * 0.02;

    // Update velocity with acceleration and damping
    velocity = velocity * viscosity + acceleration * 2.0;

    // Update height
    height += velocity;

    // Mouse interaction - create ripple
    if (mousePos.x > 0.0 && mousePos.x < 1.0 && mousePos.y > 0.0 && mousePos.y < 1.0) {
      float dist = distance(uv, mousePos);
      if (dist < mouseSize) {
        float impact = (mouseSize - dist) / mouseSize;
        height += impact * 0.15;
      }
    }

    // Boundary damping - reduce waves near edges
    float edgeDist = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
    float edgeDamping = smoothstep(0.0, 0.1, edgeDist);
    height *= edgeDamping;
    velocity *= edgeDamping;

    gl_FragColor = vec4(height, velocity, 0.0, 1.0);
  }
`;

export const waterVertexShader = `
  uniform sampler2D heightmap;
  uniform float heightScale;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying float vHeight;

  void main() {
    vUv = uv;

    // Sample heightmap
    vec4 heightData = texture2D(heightmap, uv);
    float height = heightData.x * heightScale;
    vHeight = height;

    // Calculate normal from heightmap
    float texelSize = 1.0 / 128.0;
    float heightL = texture2D(heightmap, uv + vec2(-texelSize, 0.0)).x * heightScale;
    float heightR = texture2D(heightmap, uv + vec2(texelSize, 0.0)).x * heightScale;
    float heightD = texture2D(heightmap, uv + vec2(0.0, -texelSize)).x * heightScale;
    float heightU = texture2D(heightmap, uv + vec2(0.0, texelSize)).x * heightScale;

    vec3 normal = normalize(vec3(heightL - heightR, 2.0, heightD - heightU));
    vNormal = normalMatrix * normal;

    // Displace vertex
    vec3 newPosition = position;
    newPosition.y += height;

    vWorldPosition = (modelMatrix * vec4(newPosition, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

export const waterFragmentShader = `
  uniform vec3 waterColor;
  uniform vec3 deepWaterColor;
  uniform vec3 foamColor;
  uniform vec3 lightPosition;
  uniform float time;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying float vHeight;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 lightDir = normalize(lightPosition - vWorldPosition);

    // Fresnel effect
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    fresnel = mix(0.1, 1.0, fresnel);

    // Specular highlight
    vec3 halfDir = normalize(lightDir + viewDir);
    float specular = pow(max(dot(normal, halfDir), 0.0), 128.0);

    // Fake reflection based on normal (no envMap needed)
    vec3 reflectDir = reflect(-viewDir, normal);
    vec3 skyColor = mix(vec3(0.0, 0.05, 0.1), vec3(0.1, 0.15, 0.2), reflectDir.y * 0.5 + 0.5);
    vec3 envColor = skyColor + vec3(0.0, 0.1, 0.2) * fresnel;

    // Water color based on depth/height
    float heightFactor = smoothstep(-0.5, 0.5, vHeight * 10.0);
    vec3 baseColor = mix(deepWaterColor, waterColor, heightFactor);

    // Foam on wave peaks
    float foam = smoothstep(0.02, 0.05, vHeight);
    baseColor = mix(baseColor, foamColor, foam * 0.5);

    // Combine
    vec3 color = mix(baseColor, envColor, fresnel * 0.4);
    color += specular * vec3(1.0, 0.95, 0.9);

    // Subsurface scattering approximation
    float sss = max(dot(-lightDir, normal), 0.0) * 0.3;
    color += waterColor * sss;

    // Add some subtle caustic-like patterns
    float caustic = sin(vWorldPosition.x * 5.0 + time) * sin(vWorldPosition.z * 5.0 + time * 0.7) * 0.5 + 0.5;
    color += vec3(0.0, 0.05, 0.1) * caustic * (1.0 - heightFactor) * 0.3;

    gl_FragColor = vec4(color, 0.92);
  }
`;

export const initHeightmapShader = `
  void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
`;
