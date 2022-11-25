var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$react = require("react");
var $9WItx$reactrouterdom = require("react-router-dom");
var $9WItx$reactdom = require("react-dom");
var $9WItx$babelruntimehelpersdefineProperty = require("@babel/runtime/helpers/defineProperty");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}










class $fd1a655300877ea6$var$Carousel extends (0, $9WItx$react.Component) {
    constructor(...args){
        super(...args);
        (0, ($parcel$interopDefault($9WItx$babelruntimehelpersdefineProperty)))(this, "state", {
            active: 0
        });
        (0, ($parcel$interopDefault($9WItx$babelruntimehelpersdefineProperty)))(this, "handleIndexClick", (event)=>{
            this.setState({
                active: +event.target.dataset.index
            });
        });
    }
    render() {
        const { active: active  } = this.state;
        const { images: images  } = this.props;
        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "carousel",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    src: images[active],
                    alt: "animal"
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    className: "carousel-smaller",
                    children: images.map((photo, index)=>//eslint-disable-next-line
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                            onClick: this.handleIndexClick,
                            src: photo,
                            "data-index": index,
                            className: index === active ? "active" : "",
                            alt: "animal thumbnail"
                        }, photo))
                })
            ]
        });
    }
}
(0, ($parcel$interopDefault($9WItx$babelruntimehelpersdefineProperty)))($fd1a655300877ea6$var$Carousel, "defaultProps", {
    images: [
        "http://pets-images.dev-apis.com/pets/none.jpg"
    ]
});
var $fd1a655300877ea6$export$2e2bcd8739ae039 = $fd1a655300877ea6$var$Carousel;






class $9bb069d4655ad406$var$ErrorBoundary extends (0, $9WItx$react.Component) {
    constructor(...args){
        super(...args);
        (0, ($parcel$interopDefault($9WItx$babelruntimehelpersdefineProperty)))(this, "state", {
            hasError: false,
            redirect: false
        });
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info) {
        console.error(error, info);
    }
    componentDidUpdate() {
        if (this.state.hasError) setTimeout(()=>{
            this.setState({
                redirect: true
            });
        });
    }
    render() {
        if (this.state.redirect) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Navigate), {
            to: "/"
        });
        else if (this.state.hasError) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h2", {
            children: [
                "There was an error.Oh no! What are we going todo",
                " ",
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
                    to: "/",
                    children: "Click here"
                }),
                " to go back to the homepage.Or wait five seconds and we will do it for you.Or not.I am not your mom"
            ]
        });
        return this.props.children;
    }
}
var $9bb069d4655ad406$export$2e2bcd8739ae039 = $9bb069d4655ad406$var$ErrorBoundary;



const $7249f6572ed2afff$var$ThemeContext = /*#__PURE__*/ (0, $9WItx$react.createContext)([
    "#f06d06",
    ()=>{}
]);
var $7249f6572ed2afff$export$2e2bcd8739ae039 = $7249f6572ed2afff$var$ThemeContext;





const $86c03ec8d9253bc6$var$Modal = ({ children: children  })=>{
    const elRef = (0, $9WItx$react.useRef)(null);
    if (!elRef.current) elRef.current = document.createElement("div");
    (0, $9WItx$react.useEffect)(()=>{
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);
        return ()=>modalRoot.removeChild(elRef.current);
    }, []);
    return /*#__PURE__*/ (0, $9WItx$reactdom.createPortal)(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        children: children
    }), elRef.current);
};
var $86c03ec8d9253bc6$export$2e2bcd8739ae039 = $86c03ec8d9253bc6$var$Modal;


class $e97d8a72ba7c4f0d$var$Details extends (0, $9WItx$react.Component) {
    constructor(...args){
        super(...args);
        (0, ($parcel$interopDefault($9WItx$babelruntimehelpersdefineProperty)))(this, "state", {
            loading: true,
            showModal: false
        });
        (0, ($parcel$interopDefault($9WItx$babelruntimehelpersdefineProperty)))(this, "toggleModal", ()=>this.setState({
                showModal: !this.state.showModal
            }));
    }
    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        const json = await res.json();
        this.setState(Object.assign({
            loading: false
        }, json.pets[0]));
    }
    render() {
        if (this.state.loading) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
            children: "loading..."
        });
        const { animal: animal , breed: breed , city: city , state: state , description: description , name: name , images: images , showModal: showModal  } = this.state;
        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "details",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $fd1a655300877ea6$export$2e2bcd8739ae039), {
                    images: images
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                            children: name
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                            children: `
              ${animal} - ${breed} - ${city} , ${state}
              `
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $7249f6572ed2afff$export$2e2bcd8739ae039).Consumer, {
                            children: ([theme])=>{
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("button", {
                                    onClick: this.toggleModal,
                                    style: {
                                        backgroundColor: theme
                                    },
                                    children: [
                                        "Adopt ",
                                        name
                                    ]
                                });
                            }
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                            children: description
                        }),
                        showModal ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $86c03ec8d9253bc6$export$2e2bcd8739ae039), {
                            children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h1", {
                                        children: [
                                            "Would you like to adopt ",
                                            name,
                                            "?"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                        className: "buttons",
                                        children: [
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("a", {
                                                href: "https://bit.ly/pet-adopt",
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                                onClick: this.toggleModal,
                                                children: "No"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            ]
        });
    }
}
const $e97d8a72ba7c4f0d$var$WrappedDetails = ()=>{
    const params = (0, $9WItx$reactrouterdom.useParams)();
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9bb069d4655ad406$export$2e2bcd8739ae039), {
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($e97d8a72ba7c4f0d$var$Details, {
                params: params
            }),
            ";"
        ]
    });
};
var $e97d8a72ba7c4f0d$export$2e2bcd8739ae039 = $e97d8a72ba7c4f0d$var$WrappedDetails;






const $be9f557d761a229f$var$localCache = {};
function $be9f557d761a229f$export$2e2bcd8739ae039(animal) {
    const [breedlist, setBreedList] = (0, $9WItx$react.useState)([]);
    const [status, setStatus] = (0, $9WItx$react.useState)("unloaded");
    (0, $9WItx$react.useEffect)(()=>{
        if (!animal) setBreedList([]);
        else if ($be9f557d761a229f$var$localCache[animal]) setBreedList($be9f557d761a229f$var$localCache[animal]);
        else requestBreedList();
        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");
            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await res.json();
            $be9f557d761a229f$var$localCache[animal] = json.breeds || [];
            setBreedList($be9f557d761a229f$var$localCache[animal]);
            setStatus("loaded");
        }
    }, [
        animal
    ]);
    return [
        breedlist,
        status
    ];
//provide status so they know that it is loading or not
}





const $1893678d7592df04$var$Pet = ({ name: name , animal: animal , breed: breed , images: images , location: location , id: id  })=>{
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (!images.length) hero = images[0];
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactrouterdom.Link), {
        to: `/details/${id}`,
        className: "pet",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "image-container",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    src: hero,
                    alt: name
                })
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "info"
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                children: name
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h2", {
                children: [
                    animal,
                    " - ",
                    breed,
                    " - ",
                    location
                ]
            })
        ]
    });
};
var $1893678d7592df04$export$2e2bcd8739ae039 = $1893678d7592df04$var$Pet;


const $1287b7166b11b18b$var$Results = ({ pets: pets  })=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        children: !pets.length ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
            children: "No Pets FOUND"
        }) : pets.map((pet)=>/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $1893678d7592df04$export$2e2bcd8739ae039), {
                name: pet.name,
                animal: pet.animal,
                breed: pet.breed,
                images: pet.images,
                location: `${pet.city}, ${pet.state}`,
                id: pet.id
            }, pet.id))
    });
};
var $1287b7166b11b18b$export$2e2bcd8739ae039 = $1287b7166b11b18b$var$Results;



const $6332c43d845d00cc$var$ANIMALS = [
    "bird",
    "cat",
    "dog",
    "rabbit",
    "reptile"
];
const $6332c43d845d00cc$var$SearchParams = ()=>{
    const [location, setLocation] = (0, $9WItx$react.useState)("");
    const [animal1, setAnimal] = (0, $9WItx$react.useState)("");
    const [breed, setBreed] = (0, $9WItx$react.useState)("");
    const [breeds] = (0, $be9f557d761a229f$export$2e2bcd8739ae039)(animal1);
    const [theme, setTheme] = (0, $9WItx$react.useContext)((0, $7249f6572ed2afff$export$2e2bcd8739ae039));
    const [pets, setPets] = (0, $9WItx$react.useState)([]);
    //registering the function to be called later like a clikc or event listener
    (0, $9WItx$react.useEffect)(()=>{
        requestPets();
    //dependencdies are placed in the [] in useEffect, so it will work if whatever is in the [] changes
    }, []); //eslint-disable-line react-hooks/exhaustive-deps
    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal1}&location=${location}&breed=${breed}`);
        const json = await res.json();
        setPets(json.pets);
    }
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "search-params",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    requestPets();
                //requestPets is available because of closure
                },
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("label", {
                        htmlFor: "location",
                        children: [
                            "Location",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                                id: "location",
                                value: location,
                                onChange: (e)=>setLocation(e.target.value),
                                placeholder: "location"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("label", {
                        htmlFor: "animal",
                        children: [
                            "Animal",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("select", {
                                id: "animal",
                                value: animal1,
                                onChange: (e)=>{
                                    setAnimal(e.target.value);
                                    setBreed("");
                                },
                                onBlur: (e)=>{
                                    setAnimal(e.target.value);
                                    setBreed("");
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("option", {}),
                                    $6332c43d845d00cc$var$ANIMALS.map((animal)=>{
                                        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("option", {
                                            value: animal,
                                            children: animal
                                        }, animal);
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("label", {
                        htmlFor: "breed",
                        children: [
                            "Breed",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("select", {
                                id: "breed ",
                                value: breed,
                                onChange: (e)=>{
                                    setBreed(e.target.value);
                                },
                                onBlur: (e)=>{
                                    setBreed(e.target.value);
                                },
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("option", {}),
                                    breeds.map((allBreed)=>{
                                        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("option", {
                                            value: allBreed,
                                            children: allBreed
                                        }, allBreed);
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("label", {
                        htmlFor: "theme",
                        children: [
                            "Theme",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("select", {
                                value: theme,
                                onChange: (e)=>setTheme(e.target.value),
                                onBlur: (e)=>setTheme(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("option", {
                                        value: "peru",
                                        children: "Peru"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("option", {
                                        value: "darkBlue",
                                        children: "Dark Blue"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("option", {
                                        value: "chartreuse",
                                        children: "Chartreuse"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("option", {
                                        value: "mediumorchid",
                                        children: "Medium Orchid "
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        style: {
                            backgroundColor: theme
                        },
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $1287b7166b11b18b$export$2e2bcd8739ae039), {
                pets: pets
            })
        ]
    });
};
var $6332c43d845d00cc$export$2e2bcd8739ae039 = $6332c43d845d00cc$var$SearchParams;



const $da11a1101b2a894a$var$App = ()=>{
    const theme = (0, $9WItx$react.useState)("darkblue");
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$react.StrictMode), {
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $7249f6572ed2afff$export$2e2bcd8739ae039).Provider, {
            value: theme,
            children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactrouterdom.BrowserRouter), {
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("header", {
                        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
                            to: "/",
                            children: "Adopt Me!"
                        })
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactrouterdom.Routes), {
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Route), {
                                path: "/details/:id",
                                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $e97d8a72ba7c4f0d$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Route), {
                                path: "/",
                                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $6332c43d845d00cc$export$2e2bcd8739ae039), {})
                            })
                        ]
                    })
                ]
            })
        })
    });
};
(0, $9WItx$reactdom.render)(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$App, {}), document.getElementById("root"));


//# sourceMappingURL=index.js.map
