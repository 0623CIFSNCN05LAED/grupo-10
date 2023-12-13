
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
(UUID(),'ROG Strix Scar 18', 4325843, 'asus', 'Disfrutá de la perfecta combinación de rendimiento y diseño.', 'pcs', 'asus-ROG-strix.png'),
(UUID(), 'ASUS Zenbook S 13 OLED', 1799900, 'asus', 'La Notebook OLED más delgada del mundo', 'pcs', 'asus-zenbook.png'),
(UUID(), 'Mouse Asus Rog Gladius', 279909, 'asus', 'Óptico, inalámbrico, diseño ergonómico para todos los tipos de agarre', 'accesorios', 'mouse-asus.jpg'),
(UUID(), 'Notebook Lenovo Legion 5', 1210000, 'lenovo', 'Laptop para gaming equipada con todo lo que necesitas para ganar', 'pcs', 'lenovo-legion.jpg'),
(UUID(), 'Auriculares Gamer Lenovo', 60834, 'lenovo', 'Estos auriculares son la elección perfecta para los gamers', 'accesorios', 'lenovo-auriculares.jpg'),
(UUID(), 'Celular Phablet Lenovo', 289160, 'lenovo', 'Smartphone Android con una enorme pantalla', 'celulares', 'lenovo-celular.jpg'),
(UUID(), 'Apple Macbook Air', 1369199, 'apple', 'La notebook más delgada y ligera de Apple con los superpoderes del chip M1', 'pcs', 'macbook-air.jpg'),
(UUID(), 'Apple AirPods', 139999, 'apple', 'Viví una experiencia inalámbrica inigualable con un sonido de alta calidad', 'accesorios', 'apple-airpods.jpg'),
(UUID(), 'iPhone 15 Pro Max', 2000000, 'apple', 'Forjado en titanio y equipado con el revolucionario chip A17 Pro', 'celulares', 'iphone-15.jpg'),
(UUID(), 'Gabinete Corsair Icue', 439012, 'corsair', '7000x Rgb Vidrio Templado Torre Blanco', 'accesorios', 'corsair-gabinete.jpg'),
(UUID(), 'Teclado Gamer Corsair K55', 64167, 'corsair', 'Rgb Pro Lite, Teclas Macro, Inglés Color Del Teclado Negro', 'accesorios', 'corsair-teclado.jpg'),
(UUID(), 'Memoria Ram Ddr5 Razer', 171999, 'corsair', 'Con 32 Gb 5600 Mhz, esta memoria DIMM es ideal para tu pc de escritorio', 'accesorios', 'corsair-memoria.jpg'),
(UUID(), 'Parlantes Gamer Chroma 3', 327900, 'razer', 'Razer Nommo ofrece un sonido natural, con una gran claridad y precisión', 'accesorios', 'razer-parlantes.jpg'),
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
(UUID(), 'Juan', 'Pérez', 'juan.perez@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'cachavacha.jpg', 'admin'),
(UUID(), 'María', 'González', 'maria.gonzalez@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'mafalda.jpg', 'admin'),
(UUID(), 'Carlos', 'Hernández', 'carlos.hernandez@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'users_default.png', 'user'),
(UUID(), 'Lucía', 'Rodríguez', 'lucia.rodriguez@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'oaky.jpg', 'user'),
(UUID(), 'Pedro', 'García', 'pedro.garcia@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'manA.jpg', 'user'),
(UUID(), 'Isabel', 'Fernández', 'isabel.fernandez@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'neurus.jpg', 'user'),
(UUID(), 'Alejandro', 'Torres', 'alejandro.torres@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'anteojito.jpg', 'user'),
(UUID(), 'Carmen', 'Ortiz', 'carmen.ortiz@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'clemente.jpg', 'user'),
(UUID(), 'Fernando', 'Ramos', 'fernando.ramos@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'larguirucho.jpg', 'user'),
(UUID(), 'Ana', 'Ruiz', 'ana.ruiz@email.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'peggy.jpg', 'user'),
(UUID(), 'Admin', 'Administrador', 'admin@admin.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'neurus.jpg', 'admin'),
('a6db4710-8581-4879-9714-72ad57fb57a9', 'Estiven', 'Yepes', 'estiven@mail.com', '$2a$10$PuIcanIA/fQyEiIkAQNBu.kAba.9WjqFTlmCH5PKt91raqP8dCvTe', 'pucho.jpg', 'user'),
('69efcb50-28d6-4218-970b-0b920797a8e1', 'Pablo', 'Gomez', 'pablo@mail.com', '$2a$10$3brLMYkhw9H.TTUzERa5C.au.FPRxYrpXK6CQv6bORSFtJ7HOBJZ6', 'orko.png', 'user')
;


