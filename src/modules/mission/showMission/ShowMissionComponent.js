import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import Mission from "components/sections/mission";
import ShowMission from "../../../components/sections/ShowMission";


const ShowMissionComponent = (
    {
        item
    }
) => {
    const renderPost = useMemo(() => item.map(({...props}) => (
        <ShowMission
            key={props.id}
            {...props}
        />
    )), [item]);

    return (
        <section>
            <div className="container">
                {renderPost}
            </div>
        </section>
    );
};

ShowMissionComponent.propTypes = {
    item: PropTypes.array,
};

ShowMissionComponent.defaultProps = {
    item: []
};

export default ShowMissionComponent;