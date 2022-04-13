package com.bms.persistences.account;


import com.bms.models.Account;
import com.bms.persistences.account.registration.token.ConfirmationToken;
import com.bms.persistences.account.registration.token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AccountService implements UserDetailsService {
    private final static String USER_NOT_FOUND_MSG = "User %u not found";
    private final AccountRepository accountRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return accountRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, username)));
    }

    // TODO: Resend confirm token for token-expired account

    public String signUpAccount(Account account) {
        boolean accountExisted = accountRepository.findByUsername(account.getUsername()).isPresent();
        boolean emailExisted = accountRepository.findByEmail(account.getEmail()).isPresent();

        if (accountExisted) {
            throw new IllegalStateException("Username's already been taken");
        }

        if (emailExisted) {
            throw new IllegalStateException("Email's already been used by another account");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(account.getPassword());
        account.setPassword(encodedPassword);

        // Insert account to db
        accountRepository.save(account);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(30),
                account
        );

        confirmationTokenService.saveConfirmationToken(confirmationToken);

        return token;
    }

    public int enableAccount(String username) {
        return accountRepository.enableAccount(username);
    }
}
