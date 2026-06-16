const config = {
    event: {
        defaultEventId: "unforgettaval-valentina-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    seo: {
        titulo: "UnforgettaVal | XV Valentina",
        descripcion: "Quinceanera de Valentina - Pop Rebel Dream Sweet & Sour",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Valentina",
        fecha: "25-07-2026",
        fechaVisible: "Sábado 25 de Julio de 2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Iglesia Pendiente",
            hora: "7:00pm",
            direccion: "Direccion pendiente",
            ubicacionUrl: "https://www.google.com/maps/search/?api=1&query=Iglesia%20Pendiente%20Direccion%20pendiente"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Hotel Gran Tikal Futura - salón tikal V",
            hora: "",
            direccion: "Calzada Roosevelt 22-43, Cdad. de Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/SsKs8HQ48LsEJbiZ6"
        }
    },

    textos: {
        mensajeInvitado: "Agradecemos que nos confirmes tu asistencia lo antes posible o bien que nos indiques que no podrás acompañarnos.",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#unforgettaVALE",
        instagramUrl: "#",
        facebookUrl: "#",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
