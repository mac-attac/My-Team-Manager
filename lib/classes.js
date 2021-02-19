class Employee {
    constructor(name, id, email, role) {
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email, 'Manager')
        this.officeNumber = officeNumber
    }
    getRole() {
        return this.role
    }
}

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email, "Engineer")
        this.github = github
    }
    
    getGithub() {
        return this.github
    }

    getRole() {
        return this.role
    }

}

class Intern extends Employee {
    constructor(school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }
}

module.exports = classes