import {
  BodyModal,
  Overlay,
  Close,
  Container,
  ButtonContainerCancel,
  ButtonContainerConfirm,
} from './style';

interface IModal {
  setModal: (args: boolean) => void;
  modal: boolean;
  funcionario: string
  data: string
}

export function ModalConfirm({ setModal, modal, funcionario, data }: IModal): any {

  function handleClick(e: any) {
    if (e.currentTarget === e.target) {
      setModal(false);
    }
  }
  console.log(funcionario)
  if (modal)
    return (
      <Overlay onClick={handleClick}>
        <Container>
          <div>
            <h1>Confirmar Agendamento</h1>
            <Close>
              <button
                onClick={() => {
                  setModal(false);
                }}
                type="button"
              >
                <svg width="30" height="30" viewBox="0 0 20 20" fill="##875EFF">
                  <path
                    d="M4.35156 5.19496L9.15406 9.99746L4.35156 14.8L5.20009 15.6485L10.0026 10.846L14.7963 15.6397L15.6449 14.7912L10.8511 9.99746L15.6449 5.20371L14.7963 4.35518L10.0026 9.14894L5.20009 4.34644L4.35156 5.19496Z"
                    fill="#fd0f04"
                    stroke="#fd0f04"
                  ></path>
                </svg>
              </button>
            </Close>
            <BodyModal>
              <div className='infos'>
                <p><strong>Profissional: </strong>{funcionario}</p>
                <p><strong>Data agendada: </strong>{data}</p>
              </div>
              <ButtonContainerConfirm >
                <button>
                  Confirmar Agendamento
                </button>
              </ButtonContainerConfirm>
              <ButtonContainerCancel >
                <button onClick={() => { setModal(false); }}>Cancelar agendamento</button>
              </ButtonContainerCancel>
            </BodyModal>
          </div>
        </Container>
      </Overlay >
    );
  else return null;
}