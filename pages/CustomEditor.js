
import { Editor, Transforms, Text } from 'slate'

export const CustomEditor = {
    isBoldMarkActive(editor) {
        // A root-level Editor node that contains the entire document's content.
        const [match] = Editor.nodes(editor, {
            match: n => n.bold === true
        })
        // !! way of casting a "truthy" or "falsy"
        return !!match
    },
    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        // Transforms are functions that let us change the editor's value.
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        )
    },
    isItalicMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.italic === true
        })
        return !!match
    },
    toggleItalicMark(editor) {
        const isActive = CustomEditor.isItalicMarkActive(editor)
        Transforms.setNodes(
            editor,
            { italic: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        )
    },
    isUnderlineMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.underline === true
        })
        return !!match
    },
    toggleUnderlineMark(editor) {
        const isActive = CustomEditor.isUnderlineMarkActive(editor)
        Transforms.setNodes(
            editor,
            { underline: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        )
    },
    isCodeBlocMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'code'
        })
        return !!match
    },
    toggleCodeBlockMark(editor) {
        const isActive = CustomEditor.isCodeBlocMarkActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? 'paragraph' : 'code' },
            { match: n => Editor.isBlock(editor, n) }
        )
    },
    isLeftAlignTextActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'left'
        })
        return !!match
    },
    toggleLeftAlignTextMark(editor) {
        const isActive = CustomEditor.isLeftAlignTextActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? 'paragraph' : 'left' },
            { match: n => Editor.isBlock(editor, n) }
        )
    },
    isCenterAlignTextActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'center'
        })
        return !!match
    },
    toggleCenterAlignTextMark(editor) {
        const isActive = CustomEditor.isCenterAlignTextActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? 'paragraph' : 'center' },
            { match: n => Editor.isBlock(editor, n) }
        )
    },
    isRightAlignTextActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'right'
        })
        return !!match
    },
    toggleRightAlignTextMark(editor) {
        const isActive = CustomEditor.isRightAlignTextActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? 'paragraph' : 'right' },
            { match: n => Editor.isBlock(editor, n) }
        )
    }
}
