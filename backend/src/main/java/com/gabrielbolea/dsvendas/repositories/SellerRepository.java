package com.gabrielbolea.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabrielbolea.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
