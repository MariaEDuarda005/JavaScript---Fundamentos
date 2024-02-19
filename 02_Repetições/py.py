# Função para mostrar o intervalo de 3 em 3
def mostrar_intervalo():
    # Obtém os números inicial e final do usuário
    inicio = int(input("Digite o número inicial: "))
    final = int(input("Digite o número final: "))
    intervalo = int(input("Informe o interval da sequencia: "))

    # Verifica se os valores inseridos são válidos
    if inicio <= final:
        print(final)
        # Exibe os números no intervalo de 3 em 3
        for i in range(inicio, final, intervalo):
            print(i)
    else:
        print("Por favor, digite um número final maior ou igual ao número inicial.")

# Chama a função
mostrar_intervalo()




