-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2025 at 02:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(4) NOT NULL,
  `categoryName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Pasta'),
(2, 'Pizza'),
(3, 'Chicken'),
(4, 'Fruit Soda'),
(5, 'Add Ons');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(4) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `productName` varchar(40) NOT NULL,
  `isAvailable` varchar(6) NOT NULL DEFAULT 'true',
  `productCode` varchar(30) NOT NULL,
  `productPrice` int(4) NOT NULL,
  `img` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `productName`, `isAvailable`, `productCode`, `productPrice`, `img`) VALUES
(1, 1, 'Truffle Cream Pasta', 'true', 'TRFL PST', 220, 'truffle.png'),
(2, 1, 'Oven Fresh Lasagna', 'true', 'LSGNA', 190, 'lasagna.png'),
(3, 1, 'Tuna Pasta', 'true', 'TNA PST', 180, 'tuna.png'),
(4, 1, 'Cheesy Spaghetti', 'true', 'CHSY SPAG', 170, 'spaghetti.png'),
(5, 1, 'Fettuccine Carbonara', 'true', 'FTCN CARB', 175, 'carbonara.png'),
(6, 2, 'Ham & Cheese', 'true', 'H&C', 0, 'ham&cheese.png'),
(7, 2, 'Pepperoni', 'true', 'PPRONI', 0, 'pepperoni.png'),
(8, 2, 'Hawaiian', 'true', 'HWN', 0, 'hawaiian.png'),
(9, 2, 'Four Cheese & Bacon', 'true', 'C&B', 0, 'cheese&bacon.png'),
(10, 3, '1 PC Fried Chicken w/ Rice', 'true', '1PC CKN', 110, 'c1.png'),
(11, 3, '2 PC Fried Chicken w/ Rice', 'true', '2PC CKN', 180, 'c2.png'),
(12, 3, 'Cheesy Spaghetti and Fried Chicken', 'true', 'SPAG & CKN', 240, 'c3.png'),
(13, 3, 'Pork BBQ and Fried Chicken', 'true', 'BBQ & CKN', 200, 'c4.png'),
(14, 4, 'Strawberry Soda', 'true', 'STRW SOD', 0, 'f1.png'),
(15, 4, 'Mixed Berries Soda', 'true', 'MXBR SOD', 0, 'f2.png'),
(16, 4, 'Strawberry Yakult', 'true', 'STRW YAK', 0, 'f3.png'),
(17, 4, 'Lemon Yakult', 'true', 'LEMN YAK', 0, 'f4.png'),
(18, 5, 'Gravy', 'true', 'Gravy', 20, 'gravy.png'),
(19, 5, 'Fried Egg', 'true', 'FRD EGG', 20, 'egg.png'),
(20, 5, 'Rice', 'true', 'RICE', 30, 'rice.png'),
(21, 5, 'Mashed Potato', 'true', 'MSH POT', 50, 'potato.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `sizeID` int(4) NOT NULL,
  `productID` int(4) NOT NULL,
  `sizeName` varchar(30) NOT NULL,
  `sizeCode` varchar(30) NOT NULL,
  `sizePrice` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`sizeID`, `productID`, `sizeName`, `sizeCode`, `sizePrice`) VALUES
(1, 6, 'personal', 'PS', 60),
(2, 6, 'small', 'SM', 120),
(3, 6, 'medium', 'MD', 180),
(4, 6, 'large', 'LG', 240),
(5, 7, 'personal', 'PS', 80),
(6, 7, 'small', 'SM', 140),
(7, 7, 'medium', 'MD', 200),
(8, 7, 'large', 'LG', 260),
(9, 8, 'personal', 'PS', 80),
(10, 8, 'small', 'SM', 140),
(11, 8, 'medium', 'MD', 200),
(12, 8, 'large', 'LG', 260),
(13, 9, 'personal', 'PS', 100),
(14, 9, 'small', 'SM', 180),
(15, 9, 'medium', 'MD', 240),
(16, 9, 'large', 'LG', 300),
(17, 14, 'regular', 'RG', 60),
(18, 14, 'medium', 'MD', 80),
(19, 14, 'large', 'LG', 100),
(20, 14, 'pitcher', 'PT', 150),
(21, 15, 'regular', 'RG', 60),
(22, 15, 'medium', 'MD', 80),
(23, 15, 'large', 'LG', 100),
(24, 15, 'pitcher', 'PT', 150),
(25, 16, 'regular', 'RG', 80),
(26, 16, 'medium', 'MD', 100),
(27, 16, 'large', 'LG', 120),
(28, 16, 'pitcher', 'PT', 180),
(29, 17, 'regular', 'RG', 80),
(30, 17, 'medium', 'MD', 100),
(31, 17, 'large', 'LG', 120),
(32, 17, 'pitcher', 'PT', 180);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`sizeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `sizeID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
