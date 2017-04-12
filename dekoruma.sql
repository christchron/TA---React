-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2017 at 01:17 PM
-- Server version: 5.6.21-log
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dekoruma`
--

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE IF NOT EXISTS `produk` (
`id` int(11) NOT NULL,
  `name` text NOT NULL,
  `item_and_brand` text NOT NULL,
  `price` varchar(300) NOT NULL,
  `stok` varchar(300) NOT NULL,
  `category` varchar(300) NOT NULL,
  `image` varchar(300) NOT NULL,
  `description` text NOT NULL,
  `brand` varchar(300) NOT NULL,
  `color` varchar(300) NOT NULL,
  `material` varchar(300) NOT NULL,
  `box_size` varchar(300) NOT NULL,
  `item_size` varchar(300) NOT NULL,
  `weight` varchar(300) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `name`, `item_and_brand`, `price`, `stok`, `category`, `image`, `description`, `brand`, `color`, `material`, `box_size`, `item_size`, `weight`) VALUES
(1, 'IDEAL PANCI MASAK TROPICANA SET 16/24 CM BLUE ROYAL HERITAGE', 'Panci dari Ideal', '325000', '7', 'dapur', 'dapur-1.jpg', 'Satu set terdiri dari 5pcs panci dan 5 pcs tutup panci dengan ukuran panci diameter 24cm tinggi 11cm; diameter 22cm tinggi 10cm; diameter 20cm tinggi 10cm; diameter 18cm tinggi 9cm dan diameter 16cm tinggi 8cm.', 'Ideal', 'Putih', 'Stainless', '47cm x 28cm x 20cm', 'Sama dengan ukuran kemasan', '5kg'),
(2, 'Lotte Mart L-LIVING CASSEROLE CERAMIC W/LID 24CM', 'Casserole dari Lotte Mart', '459000', '21', 'dapur', 'dapur-2.jpg', '-', 'Lotte Mart', 'Krem', 'Keramik', '24cm x 24cm x 13cm', 'Sama dengan ukuran kemasan', '2kg'),
(3, 'Lotte Mart L-LIVING CASSEROLE B N-STICK W/LID 24CM', 'Casserole dari Lotte Mart', '259000', '23', 'dapur', 'dapur-3.jpg', '-', 'Lotte Mart', 'Merah muda', 'Teflon', '24cm x 24cm x 13cm', 'Sama dengan ukuran kemasan', '2kg'),
(4, 'Lotte Mart L-LIVING SAUCEPAN B N-STICK W/LID 16CM', 'Wajan dari Lotte Mart', '169000', '31', 'dapur', 'dapur-4.jpg', '-', 'Lotte Mart', 'Hijau', 'Teflon', '16cm x 16cm x 9cm', 'Sama dengan ukuran kemasan', '2kg'),
(5, 'Neoflam Mitra square egg pan', 'Wajan dari Neoflam', '253000', '98', 'dapur', 'dapur-5.jpg', 'Peralatan masak dengan bahan aluminium yang di cor dengan lapisan Ecolon gagang yang melekat pada body pan sehingga terlihat ramping dan mudah digunakan', 'Neoflam', 'Hijau', 'alumunium', '15cm x 15cm x 3cm', '3cm', '0.7kg'),
(6, 'Lotte Mart L-LIVING 3P FRYPAN B N-STICK 18;20;24CM', 'Wajan dari Lotte Mart', '289000', '107', 'dapur', 'dapur-6.jpg', 'Satu paket terdiri dari 3pcs yang memiliki diameter 18cm; 20; 24cm.', 'Lotte Mart', 'Hijau', 'Stainless; Teflon', '24cm x 24cm x 9cm', 'Sama dengan ukuran kemasan', '3kg'),
(7, 'Lotte Mart L-LIVING FRYPAN DIE CAST MARBLE 24CM', 'Wajan dari Lotte Mart', '329000', '17', 'dapur', 'dapur-7.jpg', '-', 'Lotte Mart', 'Abu-abu', 'Keramik; Plastik; Teflon', '24cm x 24cm x 5.5cm', 'Sama dengan ukuran kemasan', '2kg'),
(8, 'Tupperware New Shelf Saver 850ml', 'Tempat Bumbu dari Tupperware', '85800', '57', 'dapur', 'dapur-8.jpg', 'Keistimewaan produk ini adalah memiliki seal yang rapat menahan udara masuk dan keluar dari wadah sehingga makanan yang ada di dalamnya dapat lebih tahan lama kesegarannya. Base bagian luarnya bertekstur kasar sehingga tidak mudah tergores sedangkan di bagian depan base terdapat garis tebal bertekstur licin berfungsi sebagai jendela untuk memudahkan melihat isinya. Stackable-beberapa produk yang sama dapat disusun menumpuk ke atas sehingga terlihat rapi dan menghemat ruang penyimpanan. Terdiri dari : Shelf Saver (2pcs) volume 850ml / 14.6 x 9.5 x 11.6 cm dan Spoon (2pcs); panjang : 10 cm.Dijamin! Harga termurah se-Indonesia!', 'Tupperware', 'Merah', 'Plastik PP', '16.6cm x 11.5cm x 13.6cm', '14.6cm x 9.5cm x 11.6cm', '1kg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
