package com.bms.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Account implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String dob;
    private String email;
    private String phone;
    private Boolean gender;
    private String username;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role roles;
    private Boolean locked = false;
    private Boolean enabled = false;
    private String additionalFile;


    public Account(String name,
                   String dob,
                   String email,
                   String phone,
                   Boolean gender,
                   String username,
                   String password,
                   Role roles,
                   String additionalFile) {
        this.name = name;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.additionalFile = additionalFile;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(roles.name());
        return Collections.singletonList(authority);
    }

    public String getName() {
        return name;
    }

    public String getDob() {
        return dob;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public Boolean getGender() {
        return gender;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public String getAdditionalFile() {
        return additionalFile;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
