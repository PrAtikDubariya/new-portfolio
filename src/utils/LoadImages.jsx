export const loadProjectImages = () => {
  const images = import.meta.glob('../assets/**/[1-9]*.png', { eager: true });

  const projectImages = {};

  Object.keys(images).forEach((path) => {
    const match = path.match(/..\/assets\/([^/]+)\/(\d+)\.png$/);
    if (match) {
      const [_, project] = match;
      if (!projectImages[project]) {
        projectImages[project] = [];
      }
      projectImages[project].push(images[path].default);
    }
  });

  // Optional: sort images by number
  Object.keys(projectImages).forEach((project) => {
    projectImages[project].sort((a, b) => {
      const aNum = parseInt(a.match(/(\d+)\.png$/)[1]);
      const bNum = parseInt(b.match(/(\d+)\.png$/)[1]);
      return aNum - bNum;
    });
  });

  return projectImages;
};
