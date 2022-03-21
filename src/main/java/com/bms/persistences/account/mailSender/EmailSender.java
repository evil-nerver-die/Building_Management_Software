package com.bms.persistences.account.mailSender;

public interface EmailSender {
    void send(String receiver, String email);
}
