import React, { Component } from 'react'
import "./styles.scss";
import BasicItemsPagination from "react-basic-items-pagination";

const mockedData = [
    {
        "title": "HxH Boss",
        "image": "https://drive.google.com/uc?export=view&id=10yGAM9xfhj4ZvcO3EqaNKxlwjbk8_MK4",
        "description": "The boss of spider bands in HunterXHunter"
    },
    {
        "title": "Trafalgaw Law Kid",
        "image": "https://drive.google.com/uc?export=view&id=1mK36ueZRjRBv4qoNl_QIVPKiCK0mQ3by",
        "description": "Law Holding his Ope-Ope Devil Fruit"
    },
    {
        "title": "Luffy Quote",
        "image": "https://drive.google.com/uc?export=view&id=1Qrj7qu_JYXYM6ew_NohZJ073P-3-Ta8H",
        "description": "If you don't take risks !\nYou can't create A Future !\nDamn Right :D !"
    },
    {
        "title": "One Piece Pirate Kings",
        "image": "https://drive.google.com/uc?export=view&id=1GXwccUO6DWgqAmT86zDEK7fuAb4L3a8r",
        "description": "Luffy , Roger and Rayleigh !\n Such Epicness in one picture !"
    }
  ];

export default class ShowSection extends Component {
    render() {
        const {height, verticalSpacing, horizontalSpacing, itemsPerRow, itemsNumber} = this.props.inputLibrary;
        return (
            <div
            className="show_section_container"
        >
            <BasicItemsPagination
                height={height} // height of each Item
                verticalSpacing={verticalSpacing} // The space of Items Vertically
                horizontalSpacing={horizontalSpacing} // The space of Items Horizontally
                itemsPerRow={itemsPerRow} // Number of Items in each row of the page
                itemsNumber={itemsNumber} // Number of Items in each page
                withImage // Whether the Item contain Image or not
                data={mockedData} // We Provide Data that contain the title , description and image url of the items
                imageStyle={ // We can choose the rate size of image contained in each Item
                    {
                    "heightRate": 100,
                    "widthRate": 50,
                    "borderTopLeftRadius": "10px",
                    "borderBottomLeftRadius": "10px",
                    "boxShadow": "4px 0px 5px 1px gray"
                    }
                }
                boxStyle={
                    {
                    "borderRadius": "10px",
                    "boxShadow": "0px 0px 10px 0px"
                    }
                }
                childrenContent={ // Wanna add some button for action or whatever, add it here !
                    (item) => {
                        <div>
                            Whatever you want ;) !
                            {item.id} // You'll need the item object for some actions
                        </div>
                    }
                }
            />
        </div>
        )
    }
}
