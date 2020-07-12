import React from 'react';
import {useSelector} from "react-redux";

const DescriptionText = ({description}) => {
    return (
        <>
            {
                description
                    ? <div className="col-12 col-lg-6 des">
                        <h3 className={"title"}>{description.metadata.title}</h3>
                        <div dangerouslySetInnerHTML={{__html: description.metadata.text}} />
                    </div>
                    : null
            }
        </>
    )
};

const Description = ({descriptions}) => {
    return (
        <div className="row pt-4">
            {descriptions.map((des, i) => <DescriptionText description={des} key={des.type + i}/>)}
        </div>
    );
};

const ContainerDescription = () => {
    let gridComponent, descriptions;
    const result = useSelector(state => state.galleryPage.components);

    if (result.length > 0) {
        gridComponent = result.filter(gridCom => gridCom.type === 'GridComponent');

        if (!!gridComponent[0].metadata.components) {
            descriptions = gridComponent[0].metadata.components;
        }
    }

    return descriptions ? <Description descriptions={descriptions}/> : null
};

export default ContainerDescription;

