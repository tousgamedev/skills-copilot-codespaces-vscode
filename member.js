function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JavaScript', 'HTML', 'CSS'],
        details: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
    member.details();
}