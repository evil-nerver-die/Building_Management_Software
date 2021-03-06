package com.bms.persistences.account;

import com.bms.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface AccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findByUsername(String username);
    Optional<Account> findByEmail(String email);

    Account findAccountByUsername(String username);

    Account getById(Integer id);
    void deleteById(Integer id);


    @Transactional
    @Modifying
    @Query("UPDATE Account a " + "SET a.enabled = TRUE WHERE a.username = ?1")
    int enableAccount(String username);
}
