const userService = require("../../services/userService");

module.exports = {
  ApiUsers: async (req, res) => {
    try {
      const users = await userService.getUsers();
      const response = {
        count: users.length,
        users: users.map((user) => ({
          id: user.id,
          name: user.first_name + " " + user.last_name,
          email: user.email,
          detail: req.headers.host + `/api/users/${user.id}`,
        })),
      };
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  },
  APiUserDetail: async (req, res) => {
    try {
      const user = await userService.getUser(req.params.id);

      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      const imagesPath = "http://localhost:4001/images/users/";
      const imageUrl = `${imagesPath}${user.avatar}`;
      console.log(imageUrl);

      const response = {
        id: user.id,
        name: user.first_name + " " + user.last_name,
        email: user.email,
        UserImageUrl: imageUrl,
      };
      res.json(response);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener los detalles del usuario" });
    }
  },
  ApiLastUser: async (req, res) => {
    const users = await userService.getUsers();
    const usersCount = users.length;
    const lastUserIndex = usersCount - 1;
    const lastUser = users[lastUserIndex];
    const imagesPath = "http://localhost:4001/images/users/";
    const imageUrl = `${imagesPath}${lastUser.avatar}`;
    const userToApi = {
      id: lastUser.id,
      first_name: lastUser.first_name,
      last_name: lastUser.last_name,
      email: lastUser.email,
      urlImage: imageUrl,
    };
    let respuesta = { lastUser: userToApi };
    res.json(respuesta);
  },
};
