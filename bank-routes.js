// bank-routes.js
const BankRoutes = {
    banks: {
        'agrario': '/pse/Agrario/index.html',
        'av-villas': '/pse/AV-Villas/index.html',
        'banco-mundo-mujer': '/pse/Banco-Mundo-Mujer/index.html',
        'bancolombia': '/pse/Bancolombia/index.html',
        'bbva': '/pse/BBVA/index.html',
        'bogota': '/pse/Bogota/index.html',
        'caja-social': '/pse/Caja-Social/index.html',
        'davivienda': '/pse/Davivienda/index.html',
        'falabella': '/pse/Falabella/index.html',
        'itau': '/pse/Itau/index.html',
        'occidente': '/pse/Occidente/index.html',
        'popular': '/pse/Popular/index.html',
        'scotiabank-colpatria': '/pse/Scotiabank-Colpatria/index.html',
        'serfinanza': '/pse/Serfinanza/index.html'
    },

    getBankRoute: function(bankCode) {
        return this.banks[bankCode.toLowerCase()] || null;
    },

    getAllBanks: function() {
        return Object.keys(this.banks).map(code => ({
            code: code,
            name: this.formatBankName(code),
            route: this.banks[code]
        }));
    },

    formatBankName: function(code) {
        const bankNames = {
            'agrario': 'Agrario',
            'av-villas': 'AV-Villas',
            'banco-mundo-mujer': 'Banco Mundo-Mujer',
            'bancolombia': 'Bancolombia',
            'bbva': 'BBVA',
            'bogota': 'Bogotá',
            'caja-social': 'Caja Social',
            'davivienda': 'Davivienda',
            'falabella': 'Falabella',
            'itau': 'Itaú',
            'occidente': 'Occidente',
            'popular': 'Popular',
            'scotiabank-colpatria': 'Scotiabank Colpatria',
            'serfinanza': 'Serfinanza'
        };
        return bankNames[code] || code;
    }
};

// Exportar para Node.js si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BankRoutes;
}