export const findById = (resource, id) => resource.find((r) => r.id === id);

export const upsert = (resources, resource) => {
  const index = resources.findIndex((p) => p.id === resource.id);
  if (resources.id && index !== -1) {
    resources[index] = resource;
  } else {
    resources.push(resource);
  }
};
