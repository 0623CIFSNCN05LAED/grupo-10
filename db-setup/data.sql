
use grupo_10;

--
-- Dumping data for table `products_brand`
--


INSERT INTO `products_brand` (id, name) values 
('asus', 'ASUS'),
('lenovo', 'Lenovo'),
('apple', 'Apple'),
('corsair', 'Corsair'),
('razer', 'Razer')
;

--
-- Dumping data for table `products_category`
--

INSERT INTO `products_category` (id, name) values 
('celulares', 'Celulares'),
('pcs', 'PCs'),
('accesorios', 'Accesorios')
;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (id, name, price, brand_id, description, category_id, image) 
values
(UUID(),'ROG Strix Scar 18', 4325843, 'asus', 'Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook.', 'pcs', '../'),
(UUID(), 'ASUS Zenbook S 13 OLED', 1799900, 'asus', 'La Notebook OLED más delgada del mundo', 'pcs', 'asus-zenbook.png'),
(UUID(), 'Mouse Asus Rog Gladius', 279909, 'asus', 'Óptico, inalámbrico, diseñado ergonómicamente para todos los tipos de agarre', 'accesorios', 'mouse-asus.jpg'),
(UUID(), 'Notebook Lenovo Legion 5', 1210000, 'lenovo', 'Laptop para gaming equipada con todo lo que necesitas para ganar', 'pcs', 'lenovo-legion.jpg'),
(UUID(), 'Auriculares Gamer Lenovo', 60834, 'lenovo', 'Estos auriculares son la elección perfecta para los amantes de los videojuegos', 'accesorios', 'lenovo-auriculares.jpg'),
(UUID(), 'Celular Phablet Lenovo', 289160, 'lenovo', 'Smartphone Android con una enorme pantalla', 'celulares', 'lenovo-celular.jpg'),
(UUID(), 'Apple Macbook Air', 1369199, 'apple', 'La notebook más delgada y ligera de Apple con los superpoderes del chip M1', 'pcs', 'macbook-air.jpg'),
(UUID(), 'Apple AirPods', 139999, 'apple', 'Los AirPods te brindan una experiencia inalámbrica inigualable con un sonido de alta calidad', 'accesorios', 'apple-airpods.jpg'),
(UUID(), 'iPhone 15 Pro Max', 2000000, 'apple', 'Forjado en titanio y equipado con el revolucionario chip A17 Pro', 'celulares', 'iphone-15.jpg'),
(UUID(), 'Gabinete Corsair Icue', 439012, 'corsair', '7000x Rgb Vidrio Templado Torre Blanco', 'accesorios', 'corsair-gabinete.jpg'),
(UUID(), 'Teclado Gamer Corsair K55', 64167, 'corsair', 'Rgb Pro Lite, Teclas Macro, Inglés Color Del Teclado Negro', 'accesorios', 'corsair-teclado.jpg'),
(UUID(), 'Memoria Ram Ddr5 Corsair Vengeance', 171999, 'corsair', 'Con 32 Gb 5600 Mhz, esta memoria de formato DIMM es ideal para tu pc de escritorio', 'accesorios', 'corsair-memoria.jpg'),
(UUID(), 'Parlantes Gamer Razer Nommo Chroma 3', 327900, 'razer', 'Razer Nommo ofrece un sonido natural, con una gran claridad y precisión', 'accesorios', 'razer-parlantes.jpg'),
(UUID(), 'Joystick Razer Kishi', 134281, 'razer', 'Controlador móvil universal para juegos', 'accesorios', 'razer-joystick.jpg')
;

--
-- Dumping data for table `users_category`
--

INSERT INTO `users_category` (id, name) values 
('user', 'User'),
('admin', 'Admin')
;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (id, first_name, last_name, email, password, avatar, category_id) 
values
(UUID(), 'Juan', 'Pérez', 'juan.perez@email.com', 'Jp123456', 'cachavacha.jpg', 'admin'),
(UUID(), 'María', 'González', 'maria.gonzalez@email.com', 'Mg123456', 'mafalda.jpg', 'admin'),
(UUID(), 'Carlos', 'Hernández', 'carlos.hernandez@email.com', 'Ch123456', 'users_default.png', 'user'),
(UUID(), 'Lucía', 'Rodríguez', 'lucia.rodriguez@email.com', 'Lr123456', 'oaky.jpg', 'user'),
(UUID(), 'Pedro', 'García', 'pedro.garcia@email.com', 'Pg123456', 'manA.jpg', 'user'),
(UUID(), 'Isabel', 'Fernández', 'isabel.fernandez@email.com', 'If123456', 'neurus.jpg', 'user'),
(UUID(), 'Alejandro', 'Torres', 'alejandro.torres@email.com', 'At123456', 'anteojito.jpg', 'user'),
(UUID(), 'Carmen', 'Ortiz', 'carmen.ortiz@email.com', 'Co123456', 'clemente.jpg', 'user'),
(UUID(), 'Fernando', 'Ramos', 'fernando.ramos@email.com', 'Fr123456', 'larguirucho.jpg', 'user'),
(UUID(), 'Ana', 'Ruiz', 'ana.ruiz@email.com', 'Ar123456', 'peggy.jpg', 'user'),
('a6db4710-8581-4879-9714-72ad57fb57a9', 'estiven', 'yepes', 'estiven@mail.com', '$2a$10$PuIcanIA/fQyEiIkAQNBu.kAba.9WjqFTlmCH5PKt91raqP8dCvTe', 'users_default.png', 'user'),
('69efcb50-28d6-4218-970b-0b920797a8e1', 'Pablo', 'Gomez', 'pablo@mail.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'users_default.png', 'user')
;

