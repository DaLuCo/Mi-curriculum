package com.portfolio.mgb.Security.Controller;

public class Mensaje {
    private String mensaje;
    
    //Constructor
    public Mensaje() {
    }

    public Mensaje(String mensaje) {
        this.mensaje = mensaje;
    }
     //Getter y setter
    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    
}
