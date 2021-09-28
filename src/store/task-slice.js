import { createSlice } from "@reduxjs/toolkit";

const initialState = {tasks : []}
const taskSlice  = createSlice({
    name :'tasks',
    initialState,
    reducers: {
        add(state, action) {
            state.tasks.push(action.payload.task);
        },
        
        check(state , action) {

          const id = action.payload.id ; 

          state.tasks.forEach(element => {
              if (element.id === id) {
                  element.isCompleted = true ;
              }
          })
          
        },
        edit (state , action) {
             const id = action.payload.id;
             state.tasks.forEach(element => {
                if (element.id === id) {
                    element.Description = action.payload.dis ;
                }
            })
        },
        remove (state , action) {
            const id = action.payload.id ; 
            const tasks = state.tasks.filter((element) => element.id !== id);
            state.tasks = tasks;
        },

 
        cancle(state , action) {
            const id = action.payload.id ; 
            state.tasks.forEach(element => {
                if (element.id === id) {
                    element.isCancled = true ;
                }
            })
        }
    }
});

export const tasksAction = taskSlice.actions ;
export default taskSlice.reducer;