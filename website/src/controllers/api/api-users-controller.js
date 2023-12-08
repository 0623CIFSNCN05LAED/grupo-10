const userService = require("../../services/userService");

module.exports = {
  ApiUsers: async (req, res) => {
    try {
      const users = await userService.getUsers();
      const response = {
        count: users.length,
        users: users.map(user => ({
          id: user.id,
          name: user.first_name +" "+ user.last_name,
          email: user.email,
          detail: req.headers.host + `/api/users/${user.id}`,
        }))
      };
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  },
  APiUserDetail: async (req, res) => {
    try {
      const user = await userService.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      const response = {
        id: user.id,
        name: user.first_name +" "+ user.last_name,
        email: user.email,
        profileImageUrl: user.profileImageUrl
      };
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los detalles del usuario' });
    }
  },
};
