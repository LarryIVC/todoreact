import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
// import Modal from './Modal';
  
const TodoApp = () => {
  return (
    <div className='wrapper'>
      <div className='todos'>
        <Header />
        {/* <Modal></Modal> */}
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;
