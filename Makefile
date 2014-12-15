define green
	@tput setaf 2; echo $1; tput sgr0;
endef

.PHONY: tests
tests:
	grunt
	$(call green,"[Running webserver]")

.PHONY: webserver
webserver:
	$(call green,"[Running webserver]")
	python -m SimpleHTTPServer

