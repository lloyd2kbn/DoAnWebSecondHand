package com.example.chuyendeweb.security;

import com.example.chuyendeweb.entity.UserEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Getter
@Setter
public class CustomUserDetails implements UserDetails {
    private static final long serialVersionUID = 1L;
    private Long id;

    private String username;

    private String email;

    private boolean enabled;

    @JsonIgnore
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public CustomUserDetails(Long id, String username, String email, boolean enabled, String password,
                             Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.enabled = enabled;
        this.password = password;
        this.authorities = authorities;
    }

    public static CustomUserDetails build(UserEntity user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return new CustomUserDetails(
                user.getId(),
                user.getUserName(),
                user.getEmail(),
                user.isEnabled(),
                user.getPasswords(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
 //System.out.println(enabled);
        return enabled;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CustomUserDetails user = (CustomUserDetails) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email, password, authorities);
    }

    @Override
    public String toString() {
        return "CustomUserDetails{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", enabled=" + enabled +
                ", password='" + password + '\'' +
                ", authorities=" + authorities +
                '}';
    }
}
