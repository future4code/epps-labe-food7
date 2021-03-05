export const goToLogin = (history) => {
    history.push("/login")
  }
  
  export const goToSignUp = (history) => {
    history.push("/cadastro")
  }

  export const goToAdress = (history) => {
    history.push("/endereco")
  }
  
  export const goToHome = (history) => {
    history.push("/")
  }

  export const goToCart = (history) => {
    history.push("/carrinho")
  }

  export const goToDetails = (history, id) => {
    history.push(`/restaurante/${id}`)
  }
  
  export const goToRequests = (history) => {
    history.push('/pedidos')
  }

  export const goToProfile = (history) => {
    history.push('/perfil')
  }

  export const goToBack = (history) => {
    history.go(-1)
  };