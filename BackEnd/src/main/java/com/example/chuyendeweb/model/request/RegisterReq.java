package com.example.chuyendeweb.model.request;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterReq {
    @NotBlank
    private String userName;
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
    @NotBlank
    private String phone;
    @NotBlank
    private String gender;
    private Set<String> role;
}