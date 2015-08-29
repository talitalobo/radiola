path.arquivos <- 'musicasQuatroColunas/'

arquivos <- list.files(path.arquivos)
novoArquivo <- data.frame(ano=numeric(0), alltags=numeric(0), musica=numeric(0), artista=numeric(0))
for(iarq in 1:length(arquivos)){
  nomeArquivo <- arquivos[iarq]
  
  arquivo<-read.table(file = paste(path.arquivos,nomeArquivo,sep=""), sep=";", stringsAsFactors = T, header = T, fileEncoding = "UTF-8")
  novoArquivo <- rbind(arquivo, novoArquivo)

}

novoArquivo$alltags <- NULL

path.arquivos <- 'musicasTresColunas/'
arquivos <- list.files(path.arquivos)
novoArquivo2 <- data.frame(ano=numeric(0), musica=numeric(0), artista=numeric(0))
for(iarq in 1:length(arquivos)){
  nomeArquivo <- arquivos[iarq]
  
  arquivo<-read.table(file = paste(path.arquivos,nomeArquivo,sep=""), sep=";", stringsAsFactors = T, header = T, fileEncoding = "UTF-8")
  novoArquivo2 <- rbind(arquivo, novoArquivo2)
  
}


todasMusicas <- rbind(novoArquivo,novoArquivo2)
