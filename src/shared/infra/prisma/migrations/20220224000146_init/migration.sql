-- CreateTable
CREATE TABLE `costumer` (
    `id` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(19) NOT NULL,
    `companyName` VARCHAR(250) NOT NULL,
    `contactName` VARCHAR(200) NOT NULL,
    `telphone` VARCHAR(17) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `costumer_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` VARCHAR(191) NOT NULL,
    `costumer_id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(100) NOT NULL,
    `number` VARCHAR(10) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `state` VARCHAR(80) NOT NULL,
    `district` VARCHAR(50) NOT NULL,
    `zipCode` VARCHAR(10) NOT NULL,
    `complement` VARCHAR(500) NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_costumer_id_fkey` FOREIGN KEY (`costumer_id`) REFERENCES `costumer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
