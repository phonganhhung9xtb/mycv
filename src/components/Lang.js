import React from 'react'
import { Trans, withTranslation } from 'react-i18next';

class Lang extends React.Component {
    render() {
        if (!this.props.children) return ''
        if (typeof this.props.children !== 'string') return this.props.children
        return <Trans>{this.props.children}</Trans>
    }
}

export default withTranslation()(Lang)