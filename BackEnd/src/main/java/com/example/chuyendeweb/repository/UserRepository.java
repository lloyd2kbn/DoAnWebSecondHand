package com.example.chuyendeweb.repository;

import com.example.chuyendeweb.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findById(Long id);

    Optional<UserEntity> findByUserName(String userName);

    boolean existsByUserName(String userName);

    boolean existsByEmail(String email);
    @Query("SELECT u FROM UserEntity u where  u.id = ?1")
    UserEntity findByUserID(Long id);

    @Query("SELECT u FROM UserEntity u where  u.verificationCode = ?1")
    UserEntity findByVerificationCode(int verificationCode);

    @Query("SELECT u FROM UserEntity u where  u.email = ?1")
    UserEntity findByEmail(String email);

    @Query("SELECT u FROM UserEntity u where  u.verifiForgot = ?1")
    UserEntity findByVerifiForgot(int verifiForgot);

	UserEntity findOnedById(Long id);

	@Transactional
	void deleteOneById(Long id);

	



}
