export const goToLogin = (history) => {
    history.push("/login")
  }
  
  export const goToSignUp = (history) => {
    history.push("/cadastro")
  }
  
  export const goToHome = (history) => {
    history.push("/")
  }

  export const goToCart = (history) => {
    history.push("/carrinho")
  }

  export const goToDetails = (history, id) => {
    history.push(`/detalhes/${id}`)
  }
  
  export const goToRequests = (history) => {
    history.push('/pedidos')
  }

  export const goToProfile = (history) => {
    history.push('/perfil')
  }