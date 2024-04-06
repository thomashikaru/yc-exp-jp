var en_targets = [
    {
        "Subject": "The salesman",
        "Verb": "traveled",
        "PP1": "to the city",
        "PP2": "for the conference",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 1,
        "Item": 1,
        "Filler": false,
        "math_question": "6 + 10 = ?",
        "math_correct_answer": 16
    },
    {
        "Subject": "The salesman",
        "Verb": "traveled",
        "PP1": "to the very popular\ncity",
        "PP2": "for the conference",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "short",
        "Condition": "long_short",
        "Group": 1,
        "Item": 2,
        "Filler": false,
        "math_question": "7 + 12 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The salesman",
        "Verb": "traveled",
        "PP1": "to the city",
        "PP2": "for the very popular\nconference",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "short",
        "Condition": "short_long",
        "Group": 1,
        "Item": 3,
        "Filler": false,
        "math_question": "6 + 10 = ?",
        "math_correct_answer": 16
    },
    {
        "Subject": "The CEO",
        "Verb": "met",
        "PP1": "with some investors",
        "PP2": "about the product",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 2,
        "Item": 1,
        "Filler": false,
        "math_question": "6 + 9 = ?",
        "math_correct_answer": 15
    },
    {
        "Subject": "The CEO",
        "Verb": "met",
        "PP1": "with some very\ninteresting\ninvestors",
        "PP2": "about the product",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "short",
        "Condition": "long_short",
        "Group": 2,
        "Item": 2,
        "Filler": false,
        "math_question": "7 + 13 = ?",
        "math_correct_answer": 20
    },
    {
        "Subject": "The CEO",
        "Verb": "met",
        "PP1": "with some investors",
        "PP2": "about the very\ninteresting product",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "short",
        "Condition": "short_long",
        "Group": 2,
        "Item": 3,
        "Filler": false,
        "math_question": "9 + 5 = ?",
        "math_correct_answer": 14
    },
    {
        "Subject": "The mother",
        "Verb": "spoke",
        "PP1": "to the principal",
        "PP2": "about her son",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 3,
        "Item": 1,
        "Filler": false,
        "math_question": "6 + 6 = ?",
        "math_correct_answer": 12
    },
    {
        "Subject": "The mother",
        "Verb": "spoke",
        "PP1": "to the principal who\nwas stressed and\noverworked",
        "PP2": "about her son",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "short",
        "Condition": "long_short",
        "Group": 3,
        "Item": 2,
        "Filler": false,
        "math_question": "11 + 8 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The mother",
        "Verb": "spoke",
        "PP1": "to the principal",
        "PP2": "about her son who\nwas stressed and\noverworked",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "short",
        "Condition": "short_long",
        "Group": 3,
        "Item": 3,
        "Filler": false,
        "math_question": "8 + 9 = ?",
        "math_correct_answer": 17
    },
    {
        "Subject": "The businessman",
        "Verb": "called",
        "PP1": "from the train",
        "PP2": "about the meeting",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 4,
        "Item": 1,
        "Filler": false,
        "math_question": "7 + 12 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The businessman",
        "Verb": "called",
        "PP1": "from the train that\nhad been delayed",
        "PP2": "about the meeting",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "short",
        "Condition": "long_short",
        "Group": 4,
        "Item": 2,
        "Filler": false,
        "math_question": "12 + 14 = ?",
        "math_correct_answer": 26
    },
    {
        "Subject": "The businessman",
        "Verb": "called",
        "PP1": "from the train",
        "PP2": "about the meeting\nthat had been\ndelayed",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "short",
        "Condition": "short_long",
        "Group": 4,
        "Item": 3,
        "Filler": false,
        "math_question": "12 + 7 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The actress",
        "Verb": "competed",
        "PP1": "for the role",
        "PP2": "during the audition",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 5,
        "Item": 1,
        "Filler": false,
        "math_question": "8 + 12 = ?",
        "math_correct_answer": 20
    },
    {
        "Subject": "The actress",
        "Verb": "competed",
        "PP1": "for the highly\ncompetitive role",
        "PP2": "during the auditon",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "medium",
        "Condition": "long_short",
        "Group": 5,
        "Item": 2,
        "Filler": false,
        "math_question": "13 + 15 = ?",
        "math_correct_answer": 28
    },
    {
        "Subject": "The actress",
        "Verb": "competed",
        "PP1": "for the role",
        "PP2": "during the highly\ncompetitive audition",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "medium",
        "Condition": "short_long",
        "Group": 5,
        "Item": 3,
        "Filler": false,
        "math_question": "10 + 11 = ?",
        "math_correct_answer": 21
    },
    {
        "Subject": "The girl",
        "Verb": "argued",
        "PP1": "with her roommate",
        "PP2": "about the bathroom",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 6,
        "Item": 1,
        "Filler": false,
        "math_question": "6 + 15 = ?",
        "math_correct_answer": 21
    },
    {
        "Subject": "The girl",
        "Verb": "argued",
        "PP1": "with her messy and\ndisorganized\nroommate",
        "PP2": "about the bathroom",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "medium",
        "Condition": "long_short",
        "Group": 6,
        "Item": 2,
        "Filler": false,
        "math_question": "5 + 7 = ?",
        "math_correct_answer": 12
    },
    {
        "Subject": "The girl",
        "Verb": "argued",
        "PP1": "with her roommate",
        "PP2": "about the messy and\ndisorganized\nbathroom",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "medium",
        "Condition": "short_long",
        "Group": 6,
        "Item": 3,
        "Filler": false,
        "math_question": "12 + 13 = ?",
        "math_correct_answer": 25
    },
    {
        "Subject": "The waiter",
        "Verb": "hurried",
        "PP1": "into the kitchen",
        "PP2": "with the tray",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 7,
        "Item": 1,
        "Filler": false,
        "math_question": "12 + 8 = ?",
        "math_correct_answer": 20
    },
    {
        "Subject": "The waiter",
        "Verb": "hurried",
        "PP1": "into the kitchen\nthat was full of\ndishes",
        "PP2": "with the tray",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "medium",
        "Condition": "long_short",
        "Group": 7,
        "Item": 2,
        "Filler": false,
        "math_question": "13 + 12 = ?",
        "math_correct_answer": 25
    },
    {
        "Subject": "The waiter",
        "Verb": "hurried",
        "PP1": "into the kitchen",
        "PP2": "with the tray that\nwas full of dishes",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "medium",
        "Condition": "short_long",
        "Group": 7,
        "Item": 3,
        "Filler": false,
        "math_question": "14 + 12 = ?",
        "math_correct_answer": 26
    },
    {
        "Subject": "The client",
        "Verb": "spoke",
        "PP1": "with his lawyer",
        "PP2": "about the judge",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 8,
        "Item": 1,
        "Filler": false,
        "math_question": "7 + 12 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The client",
        "Verb": "spoke",
        "PP1": "with his lawyer who\nseemed to lack\nexperience",
        "PP2": "about the judge",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "medium",
        "Condition": "long_short",
        "Group": 8,
        "Item": 2,
        "Filler": false,
        "math_question": "7 + 9 = ?",
        "math_correct_answer": 16
    },
    {
        "Subject": "The client",
        "Verb": "spoke",
        "PP1": "with his lawyer",
        "PP2": "about the judge who\nseemed to lack\nexperience",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "medium",
        "Condition": "short_long",
        "Group": 8,
        "Item": 3,
        "Filler": false,
        "math_question": "6 + 14 = ?",
        "math_correct_answer": 20
    },
    {
        "Subject": "The actress",
        "Verb": "danced",
        "PP1": "at the gala",
        "PP2": "in her heels",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 9,
        "Item": 1,
        "Filler": false,
        "math_question": "5 + 13 = ?",
        "math_correct_answer": 18
    },
    {
        "Subject": "The actress",
        "Verb": "danced",
        "PP1": "at the fashionable\nbut slightly awkward\ngala",
        "PP2": "in her heels",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "long",
        "Condition": "long_short",
        "Group": 9,
        "Item": 2,
        "Filler": false,
        "math_question": "12 + 8 = ?",
        "math_correct_answer": 20
    },
    {
        "Subject": "The actress",
        "Verb": "danced",
        "PP1": "at the gala",
        "PP2": "in her fashionable\nbut slightly awkward\nheels",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "long",
        "Condition": "short_long",
        "Group": 9,
        "Item": 3,
        "Filler": false,
        "math_question": "6 + 13 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The student",
        "Verb": "listened",
        "PP1": "to a lecture",
        "PP2": "for three hours",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 10,
        "Item": 1,
        "Filler": false,
        "math_question": "10 + 12 = ?",
        "math_correct_answer": 22
    },
    {
        "Subject": "The student",
        "Verb": "listened",
        "PP1": "to an extremely\nboring lecture",
        "PP2": "for three hours",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "long",
        "Condition": "long_short",
        "Group": 10,
        "Item": 2,
        "Filler": false,
        "math_question": "15 + 9 = ?",
        "math_correct_answer": 24
    },
    {
        "Subject": "The student",
        "Verb": "listened",
        "PP1": "to a lecture",
        "PP2": "for an extremely\nboring three hours",
        "Transitivity": "intransitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "long",
        "Condition": "short_long",
        "Group": 10,
        "Item": 3,
        "Filler": false,
        "math_question": "13 + 15 = ?",
        "math_correct_answer": 28
    },
    {
        "Subject": "The girl",
        "Verb": "vented",
        "PP1": "to her therapist",
        "PP2": "about her boyfriend",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 11,
        "Item": 1,
        "Filler": false,
        "math_question": "9 + 6 = ?",
        "math_correct_answer": 15
    },
    {
        "Subject": "The girl",
        "Verb": "vented",
        "PP1": "to her therapist who\nshe has been seeing\nfor some time",
        "PP2": "about her boyfriend",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "long",
        "Condition": "long_short",
        "Group": 11,
        "Item": 2,
        "Filler": false,
        "math_question": "7 + 9 = ?",
        "math_correct_answer": 16
    },
    {
        "Subject": "The girl",
        "Verb": "vented",
        "PP1": "to her therapist",
        "PP2": "about her boyfriend\nwho she has been\nseeing for some time",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "long",
        "Condition": "short_long",
        "Group": 11,
        "Item": 3,
        "Filler": false,
        "math_question": "13 + 10 = ?",
        "math_correct_answer": 23
    },
    {
        "Subject": "The lady",
        "Verb": "heard",
        "PP1": "from her friend",
        "PP2": "about the baby",
        "Transitivity": "intransitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 12,
        "Item": 1,
        "Filler": false,
        "math_question": "7 + 11 = ?",
        "math_correct_answer": 18
    },
    {
        "Subject": "The lady",
        "Verb": "heard",
        "PP1": "from her friend who\nwas just discharged\nfrom the hospital",
        "PP2": "about the baby",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "long",
        "Condition": "long_short",
        "Group": 12,
        "Item": 2,
        "Filler": false,
        "math_question": "11 + 11 = ?",
        "math_correct_answer": 22
    },
    {
        "Subject": "The lady",
        "Verb": "heard",
        "PP1": "from her friend",
        "PP2": "about the baby who\nwas just discharged\nfrom the hospital",
        "Transitivity": "intransitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "long",
        "Condition": "short_long",
        "Group": 12,
        "Item": 3,
        "Filler": false,
        "math_question": "14 + 12 = ?",
        "math_correct_answer": 26
    },
    {
        "Subject": "The child",
        "Verb": "played the piano",
        "PP1": "for the director",
        "PP2": "during the audition",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 13,
        "Item": 1,
        "Filler": false,
        "math_question": "6 + 13 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The child",
        "Verb": "played the piano",
        "PP1": "for the very\ndemanding director",
        "PP2": "during the audition",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "short",
        "Condition": "long_short",
        "Group": 13,
        "Item": 2,
        "Filler": false,
        "math_question": "9 + 10 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The child",
        "Verb": "played the piano",
        "PP1": "for the director",
        "PP2": "during the very\ndemanding audition",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "short",
        "Condition": "short_long",
        "Group": 13,
        "Item": 3,
        "Filler": false,
        "math_question": "15 + 15 = ?",
        "math_correct_answer": 30
    },
    {
        "Subject": "The robber",
        "Verb": "made an escape",
        "PP1": "from the\nneighborhood",
        "PP2": "with the jewelry",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 14,
        "Item": 1,
        "Filler": false,
        "math_question": "12 + 14 = ?",
        "math_correct_answer": 26
    },
    {
        "Subject": "The robber",
        "Verb": "made an escape",
        "PP1": "from the extremely\nexpensive\nneighborhood",
        "PP2": "with the jewelry",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "short",
        "Condition": "long_short",
        "Group": 14,
        "Item": 2,
        "Filler": false,
        "math_question": "8 + 14 = ?",
        "math_correct_answer": 22
    },
    {
        "Subject": "The robber",
        "Verb": "made an escape",
        "PP1": "from the\nneighborhood",
        "PP2": "with the extremely\nexpensive jewelry",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "short",
        "Condition": "short_long",
        "Group": 14,
        "Item": 3,
        "Filler": false,
        "math_question": "9 + 7 = ?",
        "math_correct_answer": 16
    },
    {
        "Subject": "The barista",
        "Verb": "made coffee",
        "PP1": "from the whole beans",
        "PP2": "with the espresso\nmachine",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 15,
        "Item": 1,
        "Filler": false,
        "math_question": "13 + 12 = ?",
        "math_correct_answer": 25
    },
    {
        "Subject": "The barista",
        "Verb": "made coffee",
        "PP1": "from the whole beans\nthat he just bought",
        "PP2": "with the espresso\nmachine",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "short",
        "Condition": "long_short",
        "Group": 15,
        "Item": 2,
        "Filler": false,
        "math_question": "9 + 6 = ?",
        "math_correct_answer": 15
    },
    {
        "Subject": "The barista",
        "Verb": "made coffee",
        "PP1": "from the whole beans",
        "PP2": "with the espresso\nmachine that he just\nbought",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "short",
        "Condition": "short_long",
        "Group": 15,
        "Item": 3,
        "Filler": false,
        "math_question": "9 + 9 = ?",
        "math_correct_answer": 18
    },
    {
        "Subject": "The tourist",
        "Verb": "read a book",
        "PP1": "on the bed",
        "PP2": "throughout the night",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 16,
        "Item": 1,
        "Filler": false,
        "math_question": "10 + 11 = ?",
        "math_correct_answer": 21
    },
    {
        "Subject": "The tourist",
        "Verb": "read a book",
        "PP1": "on the bed that was\nwarm and comfortable",
        "PP2": "throughout the night",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "short",
        "Condition": "long_short",
        "Group": 16,
        "Item": 2,
        "Filler": false,
        "math_question": "15 + 5 = ?",
        "math_correct_answer": 20
    },
    {
        "Subject": "The tourist",
        "Verb": "read a book",
        "PP1": "on the bed",
        "PP2": "throughout the night\nthat was warm and\ncomfortable",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "short",
        "Condition": "short_long",
        "Group": 16,
        "Item": 3,
        "Filler": false,
        "math_question": "10 + 13 = ?",
        "math_correct_answer": 23
    },
    {
        "Subject": "The dad",
        "Verb": "bought a gift",
        "PP1": "for his daughter",
        "PP2": "in the airport",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 17,
        "Item": 1,
        "Filler": false,
        "math_question": "9 + 11 = ?",
        "math_correct_answer": 20
    },
    {
        "Subject": "The dad",
        "Verb": "bought a gift",
        "PP1": "for his calm and\nquiet daughter",
        "PP2": "in the airport",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "medium",
        "Condition": "long_short",
        "Group": 17,
        "Item": 2,
        "Filler": false,
        "math_question": "14 + 10 = ?",
        "math_correct_answer": 24
    },
    {
        "Subject": "The dad",
        "Verb": "bought a gift",
        "PP1": "for his daughter",
        "PP2": "in the calm and\nquiet airport",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "medium",
        "Condition": "short_long",
        "Group": 17,
        "Item": 3,
        "Filler": false,
        "math_question": "15 + 9 = ?",
        "math_correct_answer": 24
    },
    {
        "Subject": "The student",
        "Verb": "sent an email",
        "PP1": "to his teacher",
        "PP2": "about the homework",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 18,
        "Item": 1,
        "Filler": false,
        "math_question": "15 + 7 = ?",
        "math_correct_answer": 22
    },
    {
        "Subject": "The student",
        "Verb": "sent an email",
        "PP1": "to his difficult and\nconfusing teacher",
        "PP2": "about the homework",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "medium",
        "Condition": "long_short",
        "Group": 18,
        "Item": 2,
        "Filler": false,
        "math_question": "13 + 12 = ?",
        "math_correct_answer": 25
    },
    {
        "Subject": "The student",
        "Verb": "sent an email",
        "PP1": "to his teacher",
        "PP2": "about the difficult\nand confusing\nhomework",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "medium",
        "Condition": "short_long",
        "Group": 18,
        "Item": 3,
        "Filler": false,
        "math_question": "5 + 10 = ?",
        "math_correct_answer": 15
    },
    {
        "Subject": "The robber",
        "Verb": "dug a tunnel",
        "PP1": "into the vault",
        "PP2": "with his tools",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 19,
        "Item": 1,
        "Filler": false,
        "math_question": "14 + 9 = ?",
        "math_correct_answer": 23
    },
    {
        "Subject": "The robber",
        "Verb": "dug a tunnel",
        "PP1": "into the vault that\nwas very high-tech",
        "PP2": "with his tools",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "medium",
        "Condition": "long_short",
        "Group": 19,
        "Item": 2,
        "Filler": false,
        "math_question": "8 + 7 = ?",
        "math_correct_answer": 15
    },
    {
        "Subject": "The robber",
        "Verb": "dug a tunnel",
        "PP1": "into the vault",
        "PP2": "with his tools that\nwere very high-tech",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "medium",
        "Condition": "short_long",
        "Group": 19,
        "Item": 3,
        "Filler": false,
        "math_question": "8 + 9 = ?",
        "math_correct_answer": 17
    },
    {
        "Subject": "The boy",
        "Verb": "hit the ball",
        "PP1": "into the pool",
        "PP2": "with the bat",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 20,
        "Item": 1,
        "Filler": false,
        "math_question": "15 + 11 = ?",
        "math_correct_answer": 26
    },
    {
        "Subject": "The boy",
        "Verb": "hit the ball",
        "PP1": "into the pool that\nwas near the garage",
        "PP2": "with the bat",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "medium",
        "Condition": "long_short",
        "Group": 20,
        "Item": 2,
        "Filler": false,
        "math_question": "14 + 6 = ?",
        "math_correct_answer": 20
    },
    {
        "Subject": "The boy",
        "Verb": "hit the ball",
        "PP1": "into the pool",
        "PP2": "with the bat that\nwas near the garage",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "medium",
        "Condition": "short_long",
        "Group": 20,
        "Item": 3,
        "Filler": false,
        "math_question": "7 + 15 = ?",
        "math_correct_answer": 22
    },
    {
        "Subject": "The attorney",
        "Verb": "made a scene",
        "PP1": "over the ruling",
        "PP2": "after the hearing",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 21,
        "Item": 1,
        "Filler": false,
        "math_question": "12 + 15 = ?",
        "math_correct_answer": 27
    },
    {
        "Subject": "The attorney",
        "Verb": "made a scene",
        "PP1": "over the unjustly\ndelayed ruling",
        "PP2": "after the hearing",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "long",
        "Condition": "short_long",
        "Group": 21,
        "Item": 2,
        "Filler": false,
        "math_question": "15 + 14 = ?",
        "math_correct_answer": 29
    },
    {
        "Subject": "The attorney",
        "Verb": "made a scene",
        "PP1": "over the ruling",
        "PP2": "after unjustly\ndelayed hearing",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "long",
        "Condition": "long_short",
        "Group": 21,
        "Item": 3,
        "Filler": false,
        "math_question": "14 + 5 = ?",
        "math_correct_answer": 19
    },
    {
        "Subject": "The performer",
        "Verb": "sang a song",
        "PP1": "to the crowd",
        "PP2": "before the game",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 22,
        "Item": 1,
        "Filler": false,
        "math_question": "5 + 10 = ?",
        "math_correct_answer": 15
    },
    {
        "Subject": "The performer",
        "Verb": "sang a song",
        "PP1": "to the beautiful\nlively and exciting\ncrowd",
        "PP2": "before the game",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "long",
        "Condition": "long_short",
        "Group": 22,
        "Item": 2,
        "Filler": false,
        "math_question": "10 + 12 = ?",
        "math_correct_answer": 22
    },
    {
        "Subject": "The performer",
        "Verb": "sang a song",
        "PP1": "to the crowd",
        "PP2": "before the beautiful\nlively and exciting\ngame",
        "Transitivity": "transitive",
        "ModifierPosition": "prenominal",
        "ModifierLen": "long",
        "Condition": "short_long",
        "Group": 22,
        "Item": 3,
        "Filler": false,
        "math_question": "9 + 9 = ?",
        "math_correct_answer": 18
    },
    {
        "Subject": "The chef",
        "Verb": "cooked dinner",
        "PP1": "with the recipe",
        "PP2": "for the actress",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 23,
        "Item": 1,
        "Filler": false,
        "math_question": "10 + 7 = ?",
        "math_correct_answer": 17
    },
    {
        "Subject": "The chef",
        "Verb": "cooked dinner",
        "PP1": "with the recipe that\nhas gotten very\npopular",
        "PP2": "for the actress",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "long",
        "Condition": "long_short",
        "Group": 23,
        "Item": 2,
        "Filler": false,
        "math_question": "11 + 5 = ?",
        "math_correct_answer": 16
    },
    {
        "Subject": "The chef",
        "Verb": "cooked dinner",
        "PP1": "with the recipe",
        "PP2": "for the actress that\nhas gotten very\npopular",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "long",
        "Condition": "short_long",
        "Group": 23,
        "Item": 3,
        "Filler": false,
        "math_question": "9 + 6 = ?",
        "math_correct_answer": 15
    },
    {
        "Subject": "The couple",
        "Verb": "moved the furniture",
        "PP1": "with the truck",
        "PP2": "to the apartment",
        "Transitivity": "transitive",
        "ModifierPosition": "none",
        "ModifierLen": "none",
        "Condition": "short_short",
        "Group": 24,
        "Item": 1,
        "Filler": false,
        "math_question": "12 + 10 = ?",
        "math_correct_answer": 22
    },
    {
        "Subject": "The couple",
        "Verb": "moved the furniture",
        "PP1": "with the truck that\nthey bought last\nweek",
        "PP2": "to the apartment",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "long",
        "Condition": "long_short",
        "Group": 24,
        "Item": 2,
        "Filler": false,
        "math_question": "10 + 6 = ?",
        "math_correct_answer": 16
    },
    {
        "Subject": "The couple",
        "Verb": "moved the furniture",
        "PP1": "with the truck",
        "PP2": "to the apartment\nthat they bought\nlast week",
        "Transitivity": "transitive",
        "ModifierPosition": "postnominal",
        "ModifierLen": "long",
        "Condition": "short_long",
        "Group": 24,
        "Item": 3,
        "Filler": false,
        "math_question": "6 + 14 = ?",
        "math_correct_answer": 20
    }
]