import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export const Notes = ({notes, onRemove}) => (
   <TransitionGroup component="ul" className="list-group">
       {notes.map((note, i) => (
           <CSSTransition
               key={i}
               classNames={'note'}
               timeout={800}
           >
              <li className="list-group-item note">
                 <div className="note-info">
                    <strong className="mr-4">{note.title}</strong>
                 </div>

                 <button
                     className="btn btn-outline-danger btn-sm ml-5"
                     onClick={() => onRemove(note.id)}
                 >&times;</button>
              </li>
           </CSSTransition>
       ))}
   </TransitionGroup>
);

