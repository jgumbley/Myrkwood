define green
	@tput setaf 2; echo $1; tput sgr0;
endef

.PHONY: default¬
default: venv
	. $(in_venv); jasmine-ci --browser firefox
	$(call green,"[All steps successful]")

in_venv=venv/bin/activate
.PHONY: venv
venv: venv/bin/activate
	$(call green,"[Virtualenv OK]")
venv/bin/activate:
	test -d venv || virtualenv venv
	. $(in_venv); pip install -r requirements.txt
	$(call green,"[Making venv successful]")

.PHONY: webserver
webserver:
	$(call green,"[Running webserver]")
	python -m SimpleHTTPServer

.PHONY: clean
clean:
	rm -Rf venv

