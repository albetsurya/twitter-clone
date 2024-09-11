export const userTransformer = (user) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    usernam: user.username,
    profileImage: user.profileImage
  }
}