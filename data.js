// Complete Education Data for UP & Punjab Universities
const educationData = {
    up: {
        name: "उत्तर प्रदेश",
        universities: {
            csjmu: {
                name: "CSJMU कानपुर",
                fullName: "चंद्रशेखर आजाद कृषि एवं प्रौद्योगिक विश्वविद्यालय",
                courses: {
                    btech: {
                        name: "B.Tech (4 साल)",
                        duration: "4 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "गणित-I": [
                                        {id: "math101", title: "कैलकुलस और सीमा", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "math102", title: "अवकलन के नियम", duration: "38:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "math103", title: "समाकलन की मूल बातें", duration: "42:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "math104", title: "फ़ंक्शन और ग्राफ़", duration: "50:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "भौतिकी-I": [
                                        {id: "phy101", title: "न्यूटन के नियम", duration: "50:10", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "phy102", title: "गति और वेग", duration: "35:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "phy103", title: "बल और ऊर्जा", duration: "43:25", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "phy104", title: "तरंग गति", duration: "48:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "रसायन विज्ञान": [
                                        {id: "chem101", title: "परमाणु संरचना", duration: "40:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "chem102", title: "आयनिक और सहसंयोजक बंधन", duration: "48:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "chem103", title: "आवर्त सारणी", duration: "35:10", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "प्रोग्रामिंग": [
                                        {id: "prog101", title: "C भाषा का परिचय", duration: "55:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "prog102", title: "Variables और Data Types", duration: "32:40", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "prog103", title: "Control Structures", duration: "47:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "इंजीनियरिंग ड्राइंग": [
                                        {id: "ed101", title: "तकनीकी चित्रकारी", duration: "60:00", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ed102", title: "प्रोजेक्शन के सिद्धांत", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                },
                                "Semester 2": {
                                    "गणित-II": [
                                        {id: "math201", title: "रैखिक बीजगणित", duration: "47:25", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "math202", title: "मैट्रिक्स और निर्धारक", duration: "41:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "math203", title: "वेक्टर विश्लेषण", duration: "52:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "भौतिकी-II": [
                                        {id: "phy201", title: "ऊष्मागतिकी", duration: "52:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "phy202", title: "विद्युत और चुंबकत्व", duration: "46:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "इंजीनियरिंग मैकेनिक्स": [
                                        {id: "mech201", title: "स्टेटिक्स", duration: "50:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "mech202", title: "डायनामिक्स", duration: "48:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "2nd Year": {
                                "Semester 3": {
                                    "डेटा स्ट्रक्चर": [
                                        {id: "ds301", title: "Arrays और Pointers", duration: "43:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ds302", title: "Linked Lists", duration: "51:10", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ds303", title: "Stacks और Queues", duration: "38:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ds304", title: "Trees और Binary Search", duration: "55:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "डिजिटल इलेक्ट्रॉनिक्स": [
                                        {id: "de301", title: "Boolean Algebra", duration: "44:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "de302", title: "Logic Gates", duration: "39:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "कंप्यूटर आर्किटेक्चर": [
                                        {id: "ca301", title: "CPU Design", duration: "47:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ca302", title: "Memory Organization", duration: "42:10", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                },
                                "Semester 4": {
                                    "एल्गोरिदम": [
                                        {id: "algo401", title: "Sorting Algorithms", duration: "49:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "algo402", title: "Searching Techniques", duration: "43:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "algo403", title: "Graph Algorithms", duration: "58:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग": [
                                        {id: "oop401", title: "Classes और Objects", duration: "46:25", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "oop402", title: "Inheritance", duration: "41:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "3rd Year": {
                                "Semester 5": {
                                    "ऑपरेटिंग सिस्टम": [
                                        {id: "os501", title: "Process Management", duration: "56:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "os502", title: "Memory Management", duration: "48:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "डेटाबेस मैनेजमेंट": [
                                        {id: "dbms501", title: "SQL Basics", duration: "52:40", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "dbms502", title: "Normalization", duration: "45:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                },
                                "Semester 6": {
                                    "कंप्यूटर नेटवर्क": [
                                        {id: "cn601", title: "OSI Model", duration: "43:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "cn602", title: "TCP/IP Protocol", duration: "48:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "4th Year": {
                                "Semester 7": {
                                    "सॉफ्टवेयर इंजीनियरिंग": [
                                        {id: "se701", title: "SDLC Models", duration: "44:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "se702", title: "Testing Methods", duration: "41:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "मशीन लर्निंग": [
                                        {id: "ml701", title: "Supervised Learning", duration: "58:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ml702", title: "Neural Networks", duration: "52:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                },
                                "Semester 8": {
                                    "प्रोजेक्ट वर्क": [
                                        {id: "proj801", title: "Project Planning", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "proj802", title: "Implementation Guide", duration: "60:00", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    bca: {
                        name: "BCA (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "कंप्यूटर फंडामेंटल": [
                                        {id: "cf101", title: "कंप्यूटर का परिचय", duration: "42:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "cf102", title: "हार्डवेयर और सॉफ्टवेयर", duration: "38:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "cf103", title: "Number Systems", duration: "35:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "प्रोग्रामिंग सिद्धांत": [
                                        {id: "ps101", title: "C Programming", duration: "55:10", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ps102", title: "Control Flow", duration: "47:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "गणित": [
                                        {id: "maths101", title: "Set Theory", duration: "40:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "maths102", title: "Statistics", duration: "45:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                },
                                "Semester 2": {
                                    "डेटा स्ट्रक्चर": [
                                        {id: "ds201", title: "Arrays", duration: "43:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ds202", title: "Linked Lists", duration: "51:10", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "2nd Year": {
                                "Semester 3": {
                                    "डेटाबेस": [
                                        {id: "db301", title: "SQL Basics", duration: "48:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "db302", title: "Database Design", duration: "52:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "3rd Year": {
                                "Semester 5": {
                                    "वेब डेवलपमेंट": [
                                        {id: "web501", title: "HTML/CSS", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "web502", title: "JavaScript", duration: "52:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    bba: {
                        name: "BBA (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "मैनेजमेंट सिद्धांत": [
                                        {id: "mgmt101", title: "प्रबंधन का परिचय", duration: "50:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "mgmt102", title: "Planning Process", duration: "43:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "mgmt103", title: "Organizing", duration: "41:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "बिजनेस इकॉनॉमिक्स": [
                                        {id: "econ101", title: "मांग और आपूर्ति", duration: "48:10", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "econ102", title: "Market Structures", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "अकाउंटिंग": [
                                        {id: "acc101", title: "Financial Accounting", duration: "52:40", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "acc102", title: "Journal Entries", duration: "47:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "2nd Year": {
                                "Semester 3": {
                                    "मार्केटिंग": [
                                        {id: "mkt301", title: "Marketing Mix", duration: "46:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "mkt302", title: "Consumer Behavior", duration: "49:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "3rd Year": {
                                "Semester 5": {
                                    "ह्यूमन रिसोर्स": [
                                        {id: "hr501", title: "Recruitment Process", duration: "44:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "hr502", title: "Performance Management", duration: "48:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    mba: {
                        name: "MBA (2 साल)",
                        duration: "2 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "मैनेजेरियल इकॉनॉमिक्स": [
                                        {id: "mecon101", title: "Microeconomics", duration: "55:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "mecon102", title: "Macroeconomics", duration: "52:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "2nd Year": {
                                "Semester 3": {
                                    "स्ट्रैटेजिक मैनेजमेंट": [
                                        {id: "sm301", title: "Corporate Strategy", duration: "58:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "sm302", title: "Business Planning", duration: "51:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    bcom: {
                        name: "B.Com (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "फाइनेंसियल अकाउंटिंग": [
                                        {id: "facc101", title: "Basic Accounting", duration: "48:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "facc102", title: "Trial Balance", duration: "43:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            aktu: {
                name: "AKTU लखनऊ",
                fullName: "डॉ. ए.पी.जे. अब्दुल कलाम तकनीकी विश्वविद्यालय",
                courses: {
                    btech: {
                        name: "B.Tech (4 साल)",
                        duration: "4 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "इंजीनियरिंग गणित-I": [
                                        {id: "engmath101", title: "Matrix और Determinant", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "engmath102", title: "Eigen Values", duration: "48:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "इंजीनियरिंग भौतिकी": [
                                        {id: "ephys101", title: "Wave Optics", duration: "50:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ephys102", title: "Quantum Physics", duration: "46:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    mtech: {
                        name: "M.Tech (2 साल)",
                        duration: "2 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "एडवांस्ड एल्गोरिदम": [
                                        {id: "advalgo101", title: "Dynamic Programming", duration: "52:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "advalgo102", title: "Graph Theory", duration: "48:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            lko_uni: {
                name: "लखनऊ यूनिवर्सिटी",
                fullName: "लखनऊ विश्वविद्यालय",
                courses: {
                    ba: {
                        name: "B.A. (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "हिंदी साहित्य": [
                                        {id: "hindi101", title: "आधुनिक हिंदी कविता", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "hindi102", title: "गद्य की विधाएं", duration: "42:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "अंग्रेजी साहित्य": [
                                        {id: "eng101", title: "British Literature", duration: "48:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "eng102", title: "Grammar और Composition", duration: "40:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    bsc: {
                        name: "B.Sc. (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "भौतिकी": [
                                        {id: "phys101", title: "Mechanics", duration: "50:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "phys102", title: "Thermodynamics", duration: "47:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "गणित": [
                                        {id: "maths101", title: "Calculus", duration: "45:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "maths102", title: "Algebra", duration: "42:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    punjab: {
        name: "पंजाब",
        universities: {
            pu: {
                name: "पंजाब यूनिवर्सिटी",
                fullName: "पंजाब विश्वविद्यालय, चंडीगढ़",
                courses: {
                    btech: {
                        name: "B.Tech (4 साल)",
                        duration: "4 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "गणित-I": [
                                        {id: "pumath101", title: "Calculus और Limits", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "pumath102", title: "Differential Equations", duration: "48:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "भौतिकी": [
                                        {id: "puphys101", title: "Classical Mechanics", duration: "52:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "puphys102", title: "Electromagnetic Theory", duration: "49:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    bca: {
                        name: "BCA (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "कंप्यूटर साइंस": [
                                        {id: "pucs101", title: "Programming Basics", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "pucs102", title: "Data Structures", duration: "50:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            lpu: {
                name: "LPU फगवाड़ा",
                fullName: "लवली प्रोफेशनल यूनिवर्सिटी",
                courses: {
                    btech: {
                        name: "B.Tech (4 साल)",
                        duration: "4 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "इंजीनियरिंग गणित": [
                                        {id: "lpumath101", title: "Basic Mathematics", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "lpumath102", title: "Linear Algebra", duration: "48:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "कंप्यूटर प्रोग्रामिंग": [
                                        {id: "lpuprog101", title: "C Programming", duration: "52:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "lpuprog102", title: "Object Oriented Programming", duration: "49:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            },
                            "2nd Year": {
                                "Semester 3": {
                                    "डेटा स्ट्रक्चर": [
                                        {id: "lpuds301", title: "Arrays और Stacks", duration: "46:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "lpuds302", title: "Trees और Graphs", duration: "52:10", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    bca: {
                        name: "BCA (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "कंप्यूटर बेसिक्स": [
                                        {id: "lpucf101", title: "Computer Introduction", duration: "42:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "lpucf102", title: "Operating Systems", duration: "45:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "प्रोग्रामिंग": [
                                        {id: "lpuprog201", title: "Java Programming", duration: "55:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "lpuprog202", title: "Web Development", duration: "48:45", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    bba: {
                        name: "BBA (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "बिजनेस स्टडीज": [
                                        {id: "lpubs101", title: "Business Environment", duration: "48:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "lpubs102", title: "Entrepreneurship", duration: "44:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            ptu: {
                name: "PTU जालंधर",
                fullName: "पंजाब तकनीकी विश्वविद्यालय",
                courses: {
                    btech: {
                        name: "B.Tech (4 साल)",
                        duration: "4 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "तकनीकी गणित": [
                                        {id: "ptumath101", title: "Engineering Mathematics", duration: "50:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ptumath102", title: "Applied Mathematics", duration: "47:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    polytechnic: {
                        name: "Polytechnic (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "मैकेनिकल इंजीनियरिंग": [
                                        {id: "ptume101", title: "Engineering Drawing", duration: "60:00", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "ptume102", title: "Workshop Technology", duration: "55:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            gndu: {
                name: "GNDU अमृतसर",
                fullName: "गुरु नानक देव विश्वविद्यालय",
                courses: {
                    ba: {
                        name: "B.A. (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "पंजाबी साहित्य": [
                                        {id: "punjabi101", title: "ਪੰਜਾਬੀ ਕਾਵਿ", duration: "45:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "punjabi102", title: "ਗੁਰਮੁਖੀ ਵਿਆਕਰਣ", duration: "42:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ],
                                    "इतिहास": [
                                        {id: "history101", title: "पंजाब का इतिहास", duration: "48:15", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "history102", title: "सिख धर्म का इतिहास", duration: "50:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    },
                    bcom: {
                        name: "B.Com (3 साल)",
                        duration: "3 years",
                        structure: {
                            "1st Year": {
                                "Semester 1": {
                                    "वाणिज्य": [
                                        {id: "comm101", title: "Business Organization", duration: "46:30", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"},
                                        {id: "comm102", title: "Financial Accounting", duration: "52:20", iframe: "https://www.youtube.com/embed/WUvTyaaNkzM"}
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};