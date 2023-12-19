const userService = require("../../services/userService");

module.exports = {
  ApiUsers: async (req, res) => {
    try {
      const perPage = 5;
      const page = req.query.page || 1;
      const totalUserCount = await userService.getCountTotalUsers();
      const offset = (page - 1) * perPage;
      const allUsers = await userService.getUserLimit(offset, perPage);

      const totalPages = Math.ceil(totalUserCount / perPage);

      const response = {
        meta: {
          count: totalUserCount,
          status: 200,
        },
        users: allUsers.map((user) => ({
          id: user.id,
          name: user.first_name + " " + user.last_name,
          email: user.email,
          detail: req.headers.host + `/api/users/${user.id}`,
        })),
      };
      response.meta.pagination = response.meta.pagination || {};
      if (page < totalPages) {
        response.meta.pagination.next =
          req.headers.host + req.baseUrl + `/users?page=${parseInt(page) + 1}`;
      }

      if (page > 1) {
        response.meta.pagination.previous =
          req.headers.host + req.baseUrl + `/users?page=${parseInt(page) - 1}`;
      }

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
