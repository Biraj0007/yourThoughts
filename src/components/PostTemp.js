import React from 'react'

const PostTemp = (props) => {
    return (
        <>
            <div >
                <div class="col-md-4">
                    <h2 style={{ color: "#86969f" }}>--{props.name}</h2>
                    {props.notes.length == null ? <h4>This user has no notes</h4> : props.notes.map((op) => {
                        return <>
                            <h5 >{op['title']}</h5>
                            <p> {op['description']}</p>
                        </>
                    })}
                    <p><a class="btn btn-secondary" href={`mailto:${props.email}`} role="button">Contact through mail </a></p>
                </div>
            </div>
        </>
    )
}

export default PostTemp