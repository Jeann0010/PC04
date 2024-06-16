new Vue({
    el: '#app',
    data: {
        trainers: [],
        selectedTrainers: [],
        battleStarted: false 
    },
    created() {
        fetch('compe.json')
            .then(response => response.json())
            .then(data => {
                this.trainers = data.map(trainer => ({
                    ...trainer,
                    showPokemons: false
                }));
            });
    },
    methods: {
        togglePokemons(trainer) {
            trainer.showPokemons = !trainer.showPokemons;
        },
        selectTrainer(trainer) {
            if (!this.selectedTrainers.includes(trainer)) {
                if (this.selectedTrainers.length < 2) {
                    this.selectedTrainers.push(trainer);
                }
            }
        },
        isSelected(trainer) {
            return this.selectedTrainers.includes(trainer);
        },
        startBattle() {
            if (this.selectedTrainers.length === 2) {
                
                this.battleStarted = true;
                this.selectedTrainers = [];
            }
        }
    }
});