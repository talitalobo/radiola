def getMusicasPorAno(anoNascimento, arquivo):
    adolescencia_ini = anoNascimento+13
    adolescencia_fim = anoNascimento+20

    f = open(arquivo,"r")
    linhas = f.readlines()

    resultado = ""
    for linha in linhas:
        linhaArray = linha.strip().split(";")
        if(int(linhaArray[0])>=adolescencia_ini and int(linhaArray[0])<=adolescencia_fim):
            resultado += linha
    return(resultado)

print(getMusicasPorAno(1975,"musicas.csv"))
