/*
 * Copyright (c) 2021 dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

group = "org.panda-lang"
version = "3.0.0-SNAPSHOT"

plugins {
    // groovy
    java
    kotlin("jvm") version "1.5.0"
    `maven-publish`
    id("application")
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

application {
    mainClass.set("org.panda_lang.reposilite.ReposiliteLauncher")
}

repositories {
    mavenCentral()
    maven {
        name = "panda-repository"
        url = uri("https://repo.panda-lang.org/releases")
        mavenContent {
            releasesOnly()
        }
    }
    maven {
        name = "panda-repository"
        url = uri("https://repo.panda-lang.org/snapshots")
        mavenContent {
            snapshotsOnly()
        }
    }
}

dependencies {
    implementation(kotlin("stdlib"))
    implementation("org.jetbrains.kotlin:kotlin-reflect:1.5.0")

    val exposed = "0.32.1"
    implementation("org.jetbrains.exposed:exposed-core:$exposed")
    implementation("org.jetbrains.exposed:exposed-dao:$exposed")
    implementation("org.jetbrains.exposed:exposed-jdbc:$exposed")
    implementation("org.jetbrains.exposed:exposed-java-time:$exposed")
    implementation("com.h2database:h2:1.4.199")

    val awssdk = "2.15.15"
    implementation("software.amazon.awssdk:bom:$awssdk")
    implementation("software.amazon.awssdk:s3:$awssdk")

    val javalin = "4.0.0.ALPHA2"
    implementation("io.javalin:javalin-openapi:$javalin")
    implementation("io.javalin:javalin:$javalin")

    val jetty = "9.4.40.v20210413"
    implementation("org.eclipse.jetty:jetty-server:$jetty")
    implementation("org.eclipse.jetty:jetty-webapp:$jetty")
    implementation("org.eclipse.jetty.websocket:websocket-server:$jetty")

    /* Web */

    implementation("org.webjars:swagger-ui:3.25.2")
    implementation("com.google.http-client:google-http-client:1.39.2")
    implementation("org.apache.httpcomponents:httpclient:4.5.13")
    implementation("org.apache.httpcomponents:httpcore:4.4.14")
    implementation("org.springframework.security:spring-security-crypto:5.4.6")

    /* Utilities */

    implementation("net.dzikoysk:cdn:1.8.0")
    implementation("info.picocli:picocli:4.6.1")
    implementation("com.google.guava:guava:30.1.1-jre")
    implementation("org.apache.commons:commons-collections4:4.4")
    implementation("commons-io:commons-io:2.8.0")
    implementation("org.yaml:snakeyaml:1.28")
    implementation("com.fasterxml.jackson.dataformat:jackson-dataformat-xml:2.12.3")
    implementation("org.apache.maven.indexer:maven-indexer:6.0.0")

    /* Logging */

    implementation("net.dzikoysk:dynamic-logger-slf4j:1.0.1")
    implementation("org.fusesource.jansi:jansi:2.3.2")

    val tinylog = "2.3.1"
    implementation("org.tinylog:slf4j-tinylog:$tinylog")
    implementation("org.tinylog:tinylog-api:$tinylog")
    implementation("org.tinylog:tinylog-impl:$tinylog")

    /* Tests */

    testImplementation("com.google.http-client:google-http-client-jackson2:1.39.2")
    testImplementation("org.mockito:mockito-inline:3.9.0")
    testImplementation("org.mockito:mockito-core:3.9.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.7.1")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}

tasks.register("depsize") {
    description = "Prints dependencies for \"default\" configuration"
    doLast { listConfigurationDependencies(configurations["default"])  }
}

tasks.register("depsize-all-configurations") {
    description = "Prints dependencies for all available configurations"
    doLast {
        configurations
            .filter { it.isCanBeResolved }
            .forEach { listConfigurationDependencies(it) }
    }
}

fun listConfigurationDependencies(configuration: Configuration ) {
    val formatStr = "%,10.2f"
    val size = configuration.sumOf { it.length() / (1024.0 * 1024.0) }
    val out = StringBuffer()
    out.append("\nConfiguration name: \"${configuration.name}\"\n")

    if (size > 0) {
        out.append("Total dependencies size:".padEnd(65))
        out.append("${String.format(formatStr, size)} Mb\n\n")

        configuration
            .sortedBy { -it.length() }
            .forEach {
                out.append(it.name.padEnd(65))
                out.append("${String.format(formatStr, (it.length() / 1024.0))} kb\n")
            }
    }
    else {
        out.append("No dependencies found")
    }

    println(out)
}