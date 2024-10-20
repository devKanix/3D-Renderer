import {
  blender,
  maya,
  cinema,
  unrealengine,
    topic1,
    topic2,
    topic3,
    topic4,
    topic5,
    topic6,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "topics",
      title: "Lessons",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Casting rays from the camera to the image plane",
      icon: icon1,
    },
    {
      title: "Solving the visibility problem with intersection tests",
      icon: icon2,
    },
    {
      title: "Simulating illumination with Phong shading",
      icon: icon3,
    },
    {
      title: "Casting rays to render shadows",
      icon: icon4,
    },
    {
      title: "Recursive ray tracing and reflections",
      icon: icon5,
    },
    {
      title: "Distributed ray tracing and anti-aliasing",
      icon: icon6,
    },
  ];
  
  const technologies = [
    {
      name: "Blender 3D",
      icon: blender,
    },
    {
      name: "Maya 3D",
      icon: maya,
    },
    {
      name: "Cinema 4D",
      icon: cinema,
    },
    {
      name: "Unreal engine",
      icon: unrealengine,
    },
  ];
  
  const topics = [
    {
      title: "Casting rays from the camera to the image plane",
      icon: topic1,
      points: [
        "In the real world, light rays originate at light sources, run into objects, causing bounced rays to scatter in many directions. Some of the bounced rays enter our eyes—the camera—and these are the rays we see. If we were to simulate this faithfully, we would simulate many rays that we'd never see, which is a waste of computational power. Instead, in ray tracing, we go backwards: cast rays from the camera out into the world and see how they end up at the light sources.",
        "Even with backward tracing, how many rays do we cast, and which ones? To answer this, we divide the image plane into small regions, one corresponding to each pixel in the output image. Then, we construct a ray starting at the camera and passing through the center of each region.",
        "The position of the camera is fixed, denoted as →c. The image plane is defined by the positions of its four corners, labeled as →x1, →x2, →x3, and →x4. Suppose we have a point →p on the image plane. This point is a percentage α ∈ [0,1] of the distance horizontally between the left and right edges of the image plane, and a percentage β ∈ [0,1] of the distance vertically between the top and bottom edges of the image plane.",
        "To find →p, we linearly interpolate (lerp) a distance of α between →x1 and →x2, giving a point α percent along the line segment between them. We repeat this process between →x3 and →x4, getting another point. Then, we interpolate a distance of β between these two resulting points. This process is called bilinear interpolation."
      ],
    },
      {
        title: "Solving the visibility problem with intersection tests",
        icon: topic2,
        points: [
          "How do we know what geometry the camera sees? One of the rays we cast intersects with the geometry. The closest piece of geometry a particular ray intersects is the piece that will be rendered at the pixel corresponding to that ray. Triangles are easy to determine intersection for, but spheres are even easier. A sphere is the set of all points for which the distance between that point and the designated center is equal to the radius. Meanwhile, for a ray originating at →o and going in direction →d, the ray passes through all the points corresponding to →o + t→d, where t ≥ 0.",
          "A point on the ray intersects with the sphere if the distance from the point on the ray to the center →c equals the radius r. This leads to the equation: dist(→o + d*t, →c) = r. Simplifying, we arrive at the quadratic equation: (||d||²)t² + (2<→c', →d>)t + (||→c'||² - r²) = 0, where →c' = →o - →c.",
          "Apply the quadratic equation to find t. The possibilities are as follows:",
            "1. No real t satisfies the equation ⇒ ray does not intersect the sphere.",
            "2. One value of t satisfies the equation ⇒ ray grazes the sphere, considered a hit.",
            "3. Two values of t satisfy the equation ⇒ ray passes through the sphere. Pick the smaller value to find the location closer to the camera.",
          "Remember that when t = 1, →o + →d*t = →o + →d = →o + (→p - →o) = →p, which lies on the image plane. Therefore, in all the above scenarios, we only consider t ≥ 1, where the intersection occurs past the image plane.",
          "For a single ray, we'll go through each piece of geometry in the scene, testing each object for an intersection. Out of all the intersections for a single ray, we pick the one closest to the camera (but still past the image plane), and the object corresponding to that hit determines the color of the pixel associated with the ray. If a ray does not intersect any geometry, the corresponding pixel is painted a default background color, say black.",
        ],
      },
    {
      title: "Simulating illumination with Phong shading",
      icon: topic3,
      points: [
      "To determine the color of a pixel corresponding to an object seen by the camera, we simulate how light interacts with the object using local illumination. We focus only on the object and the lights in the scene, ignoring other objects' effects. This can be approximated using the Phong reflectance model, which includes three components:",
        "1. **Ambient Light**: The scene contains ambient light, ia (intensity), which approximates light from other objects as a constant. The object reflects a portion of this light, represented by a proportion ka, resulting in a contribution of ka * ia.",
        "2. **Diffuse Reflection**: For each light in the scene, the object reflects some of the light's intensity id, known as the diffuse component. A diffuse object scatters light in all directions.",
        "3. **Reflection Based on Angle**: The amount reflected depends on how the light hits the object. If light strikes directly, more is reflected compared to grazing angles. The contribution depends on the angle between the light vector L and the surface normal N at that point, where N is the unit vector pointing directly away from the surface.",
      "The amount of light reflected is maximized when the light vector L and the surface normal N point in the same direction, making this an ideal situation for using the dot product. Given that the object reflects a proportion kd of the diffuse light, the diffuse component can be expressed as kd * id * (N • L).",
      "In addition to diffuse reflection, each light in the scene may produce a specular highlight that depends on the viewing angle. This highlight occurs because a reflective surface reflects light in a specific direction R. The alignment of the viewer's vector V with the reflection direction R determines the brightness of that point; the closer the alignment, the brighter the highlight. The dot product is again useful for this calculation.",
      "The light intensity's specular component, denoted as is, is reflected in the direction of the vector R, with only a proportion ks being reflected. To model the specular highlight, we incorporate a shininess constant α, resulting in the formula for the specular highlight: ks * is * (V • R) ^ α. A larger α indicates a shinier material, resulting in a smaller and brighter highlight.",
      "To compute the reflectance vector R, we can visualize it as constructing a parallelogram with the normal vector N in the middle. The formula for the reflectance vector is given by R = 2 * (N • L) * N - L.",
      "The light vector L is reflected across the normal direction, resulting in the reflectance vector R. A parallelogram is formed by L and R, illustrating how R is calculated in relation to L.",
    "By summing all contributions from the various light sources, we can determine the color of the object at a specific point when viewed from a particular direction.",
    "To compute the surface normal for an object, such as a sphere, the normal at a point p can be derived by normalizing the vector between the center of the sphere c and the point p, expressed as N = (p - c) / ||p - c||."
    ],
    },
    {
      title: "Casting rays to render shadows",
      icon: topic4,
      points: [
        "Until now, two objects have not interacted with each other. However, one piece of geometry might block light from reaching another, resulting in a shadow.",
        "To find the color at a specific point on an object, we follow these steps:",
          "1. Cast a ray from the point to each light source.",
          "2. For each ray, perform an intersection test with all other geometry in the scene.",
          "3. If the ray intersects with any geometry before reaching the light source (0 < t ≤ 1), the point is considered to be in shadow from that light source.",
          "4. If a point is in shadow from a light source, we ignore the diffuse and specular contributions from that light when calculating the Phong illumination.",
          "5. Include contributions from lights that are not blocked by other objects, while always including the ambient term, which approximates indirect lighting to prevent shadowed areas from appearing completely black."
      ],
    },
    {
      title: "Recursive ray tracing and reflections",
      icon: topic5,
      points: [
        "Light bounces of all geometry, but different materials bounce light in different ways. Some materials are highly diffuse, meaning they scatter bounced light in many directions, sending a little bit of light in each direction. In contrast, some materials are highly reflective, meaning they send bounced light in one direction. Many materials are a combination of the two.",
        "The angle of reflected light is influenced by the angle of incoming light (angle of incidence).",
        "We compute the reflection direction similar to the specular component in the Phong illumination model, based on the view direction:",
        "R = 2 (N ⋅ V) N − V, where V is the normalized direction of the ray we cast.",
        "For the derivation of this formula, refer back to the section on the Phong illumination model.",
        "To determine what is reflected back to the viewer, we cast a ray from the viewed point in the reflected direction R.",
    "This forms the basis of recursive ray tracing, applying the usual ray tracing algorithm to compute reflections.",
    "Further reflections may occur, so we limit recursion depth, corresponding to the number of simulated light bounces.",
    "In the Phong illumination model:",
    "  - The ambient term approximates light after many bounces and remains unchanged by reflection.",
    "  - The specular term represents direct light reflection to an object and also does not change.",
    "  - The diffuse term is calculated the same for reflective objects but its contribution is reduced by decreasing kd (the diffuse constant).",
    "We add a new term for reflected light weighted by the reflectivity constant kr; typically, a larger kr leads to a smaller kd and vice versa.",
    "Recursive ray tracing can also simulate refraction, where light passes through translucent objects, differing only in the direction of the refraction ray."
      ],
    },
    {
      title: "Distributed ray tracing and anti-aliasing",
      icon: topic6,
      points: [
        "The images produced by our ray tracer so far have jagged edges around the geometry in the scene. This is because we have only cast one ray per pixel. That ray either sees some geometry, or it doesn't, leading to sharp transitions. This is known as aliasing, because, due to the imprecision of sampling once per pixel, two different scenes may produce the same output image.",
        "To improve rendering quality, cast multiple rays per pixel, each originating from different points within the pixel.",
    "Average the results from these rays for that pixel to achieve smoother color and lighting effects.",
    "This method is called distributed ray tracing, where multiple rays are cast, and their results are averaged.",
    "Rays can be cast to regularly spaced locations inside the pixel.",
    "Alternatively, rays can be cast to randomized locations within the pixel, a technique known as stochastic ray tracing.",
    "When used to prevent aliasing, the technique is called supersampling antialiasing (SSAA), often denoted with the number of samples, e.g., 4× SSAA.",
    "Increased quality comes at a cost: total rays cast are multiplied by the number of samples per pixel, leading to significantly more computations for a single image.",
    "Distributed ray tracing can simulate various photorealistic effects:",
    "1. Motion blur by distributing rays over time for moving objects.",
    "2. Depth of field by distributing the origin of the camera ray across a 2D interval.",
    "3. Soft shadows by modeling a light source as a 2D interval and distributing shadow rays over that interval."
      ],
    },
  ];
  
  export { services, technologies, topics };