package com.bms.persistences.account.registration.token;

import com.bms.models.Account;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ConfirmationToken {
    @SequenceGenerator(
            name = "confirmation_token_sequence",
            sequenceName = "confirmation_token_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "confirmation_token_sequence"
    )
    private Integer id;

    @Column(nullable = false)
    private String token;

    @Column(nullable = false)
    private LocalDateTime createDate;

    @Column(nullable = false)
    private LocalDateTime expireDate;

    private LocalDateTime confirmDate;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "account_id"
    )
    private Account account;

    public ConfirmationToken(String token,
                             LocalDateTime createDate,
                             LocalDateTime expireDate,
                             Account account) {
        this.token = token;
        this.createDate = createDate;
        this.expireDate = expireDate;
        this.account = account;
    }
}
