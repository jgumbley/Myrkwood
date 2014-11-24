define green
	@tput setaf 2
	@tput bold
	@echo $1
	@tput sgr0
endef

.PHONY: default¬
default:
	python -m SimpleHTTPServer
	$(call green,"[All steps successful]")

