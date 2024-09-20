class NoteOverlay {
    visibility = false;
    note = '';

    constructor(visibility, note) {
        this.visibility = visibility;
        this.note = note;
    }

    get note() {
        return this.note
    }

    get visibility() {
        return this.visibility
    }

    /**
     * @param {string} newNote
     */
    set note(newNote) {
        this.note = newNote;
    }

    /**
     * @param {boolean} isVisible
     */
    set visibility(isVisible) {
        this.visibility = isVisible;
    }
}

export {
    NoteOverlay
}