module.exports = function(h, classes, columns, display) {
    if (classes.framework==='uikit') {
        return <div uk-dropdown class={classes.menu} style={display?'uk-visible':'uk-invisible'}>
        <ul class={classes.content}>{columns}</ul>
        </div>
    }
    
    if (classes.framework==='bulma') {
        return <div class={classes.menu} style={display?'display:block':'display:none'}>
        <div class={classes.content}>{columns}</div>
        </div>
    }

    if (classes.framework==='bootstrap4') {
        return <div class={classes.menu} style={display?'display:block':'display:none'}>{columns}</div>
    }

    return <ul class={classes.menu} style={display?'display:block':'display:none'}>{columns}</ul>;
}
