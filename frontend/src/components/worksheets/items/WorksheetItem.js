import * as React from 'react';
import Immutable from 'seamless-immutable';

class WorksheetItem extends React.Component {
    /** Constructor. */
    constructor(props) {
        super(props);
        this.state = Immutable({});
    }

    /** Renderer. */
    render() {
        return <div>WorksheetItem</div>;
    }
}

export default WorksheetItem;